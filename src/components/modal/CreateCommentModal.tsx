/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { FieldValues, SubmitHandler } from "react-hook-form";
import PCModal from "./PCModal";
import { Button } from "@nextui-org/button";
import PCForm from "../form/PCForm";
import PXTextarea from "../form/PCTextarea";
import { useCreateComment } from "@/hooks/comment.hook";

const CreateCommentModal = ({
  animal,
  email,
}: {
  animal: string;
  email: string;
}) => {
  const { mutate: handleAddComment } = useCreateComment();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const commentData = {
      ...data,
      animal: animal,
      email: email,
    };
    handleAddComment(commentData);
  };

  return (
    <div>
      <PCModal
        buttonClassName="w-full flex-1 text-xl"
        buttonText="add comment"
        title="Add Comment"
      >
        <PCForm onSubmit={onSubmit}>
          <div className="py-3">
            <PXTextarea label="Comment" required name="comment" type="text" />
          </div>

          <Button
            className="my-3 w-full rounded-md bg-[#05caec] font-semibold text-default"
            size="md"
            type="submit"
          >
            add comment
          </Button>
        </PCForm>
      </PCModal>
    </div>
  );
};

export default CreateCommentModal;
