/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useFieldArray,
  useForm,
} from "react-hook-form";
import PCModal from "./PCModal";
import PCTextarea from "../form/PCTextarea";
import { Button } from "@nextui-org/button";
import { useGetCategories } from "@/hooks/category.hook";
import PCSelect from "../form/PCSelect";
import PCInput from "../form/PCInput";
import { FaTrash } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { toast } from "sonner";
import { useUser } from "@/context/user.provider";
import { envConfig } from "@/envConfig";
import { useCreateAnimal } from "@/hooks/animal.hook";

const CreatePostModal = () => {
  const { user } = useUser();
  const { mutate: handleCreateAnimalPost } = useCreateAnimal();
  const {
    data: categoriesData,
    isLoading,
    isSuccess: categorySuccess,
  } = useGetCategories();

  let categoryOptions: { key: string; label: string }[] = [];

  if (categoriesData?.data && !isLoading) {
    categoryOptions = categoriesData?.data
      .sort()
      .map((category: { _id: string; name: string }) => ({
        key: category?._id,
        label: category?.name,
      }));
  }

  const methods = useForm();
  const { handleSubmit, control } = methods;
  const { append, fields, remove } = useFieldArray({
    control,
    name: "tips",
  });

  const handleFieldAppend = () => {
    append({
      name: "tips",
      value: "",
    });
  };

  const imageHostingURL = `https://api.imgbb.com/1/upload?key=${envConfig.imageToken}`;

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const formData = new FormData();
      formData.append("image", data.image[0]);

      const res = await fetch(imageHostingURL, {
        method: "POST",
        body: formData,
      });
      const imgData = await res.json();
      const imgURL = imgData?.data?.display_url;

      const postData = {
        ...data,
        user: user?.userId,
        image: imgURL,
        tips: data.tips.map((tip: { value: string }) => tip.value),
      };
      handleCreateAnimalPost(postData);
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  return (
    <div>
      <PCModal
        buttonClassName="w-full flex-1 text-xl"
        buttonText="create post"
        title="Create Post"
      >
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-wrap gap-2 py-2">
              <div className="min-w-fit flex-1">
                <PCSelect
                  required={true}
                  disabled={!categorySuccess}
                  label="Category"
                  name="category"
                  options={categoryOptions}
                />
              </div>
              <div className="min-w-fit flex-1">
                <PCInput type="file" label="Image" name="image" />
              </div>
            </div>

            <div className="flex flex-wrap-reverse gap-2 py-2">
              <div className="min-w-fit flex-1">
                <PCTextarea
                  required={true}
                  label="Description"
                  name="description"
                />
              </div>
            </div>

            <div className="flex justify-between items-center">
              <h1 className="text-xl text-[#05caec] p-2">
                Minimum need one tips
              </h1>
              <Button
                isIconOnly
                className="text-[#05caec]"
                onClick={() => handleFieldAppend()}
              >
                <IoMdAdd />
              </Button>
            </div>

            {fields.map((field, index) => (
              <div key={field.id} className="flex items-center">
                <PCInput
                  required={true}
                  label="Tips"
                  name={`tips.${index}.value`}
                />
                <Button
                  isIconOnly
                  className="text-orange-500"
                  onClick={() => remove(index)}
                >
                  <FaTrash />
                </Button>
              </div>
            ))}

            <Button type="submit">post</Button>
          </form>
        </FormProvider>
      </PCModal>
    </div>
  );
};

export default CreatePostModal;
