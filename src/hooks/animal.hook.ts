import { incrementLike } from "@/services/AnimalPosts";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

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
