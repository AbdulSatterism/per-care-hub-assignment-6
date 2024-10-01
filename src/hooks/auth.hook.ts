/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  incrementFollower,
  userLogin,
  userRegister,
} from "@/services/AuthService";
import { useMutation } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

export const useUserRegistration = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["REGISTRATION"],
    mutationFn: async (userData) => await userRegister(userData),
    onSuccess: () => {
      toast.success("user register successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export const useUserLogin = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["LOGIN"],
    mutationFn: async (userData) => await userLogin(userData),
    onSuccess: () => {
      toast.success("login successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export const useIncrementFollower = () => {
  return useMutation({
    mutationKey: ["INCREMENT_FOLLOWER"],
    mutationFn: async (id: string) => await incrementFollower(id),
    onSuccess: () => {
      toast.success("followed");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
