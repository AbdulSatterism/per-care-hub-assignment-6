/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { FieldValues } from "react-hook-form";
import {
  createAnimalPost,
  deleteOwnPost,
  getAnimalFrClient,
  incrementLike,
  postDeleteByAdmin,
  updateOwnPost,
  updatePostByAdmin,
} from "@/services/AnimalPosts";
import { useMutation, useQuery } from "@tanstack/react-query";
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

// type IUpdate={
//   id:string,
//   updateData:FieldValues
// }
export const useUpdateOwnPost = (id: string) => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["UPDATE_OWN"],
    mutationFn: async (updateData) => await updateOwnPost(id, updateData),
    onSuccess: () => {
      toast.success("animal updated successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export const useDeleteOwnPost = () => {
  return useMutation<any, Error, string>({
    mutationKey: ["DELETE_OWN"],
    mutationFn: async (id: string) => await deleteOwnPost(id),
    onSuccess: () => {
      toast.success("animal deleted successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
export const usePostUpdateByAdmin = (id: string) => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["UPDATE_ADMIN"],
    mutationFn: async (updateData) => await updatePostByAdmin(id, updateData),
    onSuccess: () => {
      toast.success("animal updated successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export const usePostDeleteByAdmin = () => {
  return useMutation<any, Error, string>({
    mutationKey: ["DELETE_ADMIN"],
    mutationFn: async (id: string) => await postDeleteByAdmin(id),
    onSuccess: () => {
      toast.success("animal deleted successfully");
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

export const animalForClient = () => {
  return useQuery({
    queryKey: ["CLIENT_ANIMAL"],
    queryFn: async () => await getAnimalFrClient(),
  });
};
