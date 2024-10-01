/* eslint-disable @typescript-eslint/no-explicit-any */
import { FieldValues } from "react-hook-form";
import { createAnimalPost, incrementLike } from "@/services/AnimalPosts";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export const useCreateAnimal = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["CREATE_ANIMAL"],
    mutationFn: async (postData) => await createAnimalPost(postData),
    onSuccess: () => {
      toast.success("animal created successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export const useIncrementLike = () => {
  return useMutation({
    mutationKey: ["LIKE"],
    mutationFn: async (id: string) => await incrementLike(id),
    onSuccess: () => {
      toast.success("upvote");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export const useIncrementDisLike = () => {
  return useMutation({
    mutationKey: ["DIS_LIKE"],
    mutationFn: async (id: string) => await incrementLike(id),
    onSuccess: () => {
      toast.success("downvote");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
