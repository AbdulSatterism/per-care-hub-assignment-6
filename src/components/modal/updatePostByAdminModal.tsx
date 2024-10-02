/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import PCModal from "./PCModal";
import PCTextarea from "../form/PCTextarea";
import { Button } from "@nextui-org/button";

import { toast } from "sonner";
import { usePostUpdateByAdmin } from "@/hooks/animal.hook";

const UpdatePostByAdminModal = ({
  description,
  id,
}: {
  description: string;
  id: string;
}) => {
  const { mutate: updatePost } = usePostUpdateByAdmin(id);

  const methods = useForm();
  const { handleSubmit } = methods;

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const postData = {
        ...data,
      };
      updatePost(postData);
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  return (
    <div>
      <PCModal buttonClassName="text-sm" buttonText="Update" title="update">
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-wrap-reverse gap-2 py-2">
              <div className="min-w-fit flex-1">
                <PCTextarea
                  defaultValue={description}
                  label="Description"
                  name="description"
                />
              </div>
            </div>

            <Button type="submit">update</Button>
          </form>
        </FormProvider>
      </PCModal>
    </div>
  );
};

export default UpdatePostByAdminModal;
