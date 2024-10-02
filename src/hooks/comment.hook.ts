/* eslint-disable @typescript-eslint/no-explicit-any */
import { createComment } from "@/services/Comment";
import { useMutation } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

export const useCreateComment = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["CREATE_ANIMAL"],
    mutationFn: async (commentData) => await createComment(commentData),
    onSuccess: () => {
      toast.success("comment added successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
