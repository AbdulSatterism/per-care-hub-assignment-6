/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  deleteUserByAdmin,
  getAllUserByAdmin,
  getProfileUser,
  updateOwnProfile,
  userRoleToggle,
} from "@/services/User";
import { useMutation, useQuery } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

export const getUserForProfile = () => {
  return useQuery({
    queryKey: ["PROFILE_USER"],
    queryFn: async () => await getProfileUser(),
  });
};

export const useGetAllUserByAdmin = () => {
  return useQuery({
    queryKey: ["ALL_USER"],
    queryFn: async () => await getAllUserByAdmin(),
  });
};

export const useUpdateOwnProfile = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["UPDATE_PROFILE"],
    mutationFn: async (userData) => await updateOwnProfile(userData),
    onSuccess: () => {
      toast.success("updated successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export const useUserToggleRole = () => {
  return useMutation<any, Error, string>({
    mutationKey: ["UPDATE_ROLE"],
    mutationFn: async (id) => await userRoleToggle(id),
    onSuccess: () => {
      toast.success("role updated");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export const useDeleteUserByAdmin = () => {
  return useMutation<any, Error, string>({
    mutationKey: ["DELETE_ROLE"],
    mutationFn: async (id) => await deleteUserByAdmin(id),
    onSuccess: () => {
      toast.success("user deleted successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
