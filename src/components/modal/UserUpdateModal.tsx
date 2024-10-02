/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import PCModal from "./PCModal";
import { Button } from "@nextui-org/button";
import { toast } from "sonner";
import PCInput from "../form/PCInput";
import { useUpdateOwnProfile } from "@/hooks/user.hook";

const UserUpdateModal = ({ name, phone }: { name: string; phone: string }) => {
  const { mutate: updateProfile, isPending } = useUpdateOwnProfile();

  const methods = useForm();
  const { handleSubmit } = methods;

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const postData = {
        ...data,
      };
      updateProfile(postData);
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  return (
    <div>
      <PCModal
        buttonClassName="mt-4 px-4 py-2 bg-[#05caec] text-white rounded"
        buttonText="Update"
        title="update"
      >
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-wrap-reverse gap-2 py-2">
              <div className="min-w-fit flex-1">
                <PCInput
                  defaultValue={name}
                  label="Name"
                  name="name"
                  type="text"
                />
                <PCInput
                  defaultValue={phone}
                  label="phone"
                  name="phone"
                  type="text"
                />
              </div>
            </div>

            <Button disabled={isPending} type="submit">
              update
            </Button>
          </form>
        </FormProvider>
      </PCModal>
    </div>
  );
};

export default UserUpdateModal;
