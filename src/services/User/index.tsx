/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import axiosInstance from "@/lib/axiosInstance";
import { FieldValues } from "react-hook-form";

export const getAllUserByAdmin = async () => {
  try {
    const { data } = await axiosInstance.get(`/user`);

    return data;
  } catch (err: any) {
    throw new Error(err);
  }
};

export const getProfileUser = async () => {
  try {
    const { data } = await axiosInstance.get(`/user/me`);

    return data;
  } catch (err: any) {
    throw new Error(err);
  }
};

export const updateOwnProfile = async (userData: FieldValues) => {
  try {
    const { data } = await axiosInstance.put(`/user/me`, userData);

    return data;
  } catch (err: any) {
    throw new Error(err);
  }
};

export const userRoleToggle = async (id: string) => {
  try {
    const { data } = await axiosInstance.put(`/user/toggle-role/${id}`);

    return data;
  } catch (err: any) {
    throw new Error(err);
  }
};

export const deleteUserByAdmin = async (id: string) => {
  try {
    const { data } = await axiosInstance.delete(`/user/delete-user/${id}`);

    return data;
  } catch (err: any) {
    throw new Error(err);
  }
};
