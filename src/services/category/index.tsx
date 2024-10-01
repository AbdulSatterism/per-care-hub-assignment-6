/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import axiosInstance from "@/lib/axiosInstance";

export const getCategory = async () => {
  try {
    const { data } = await axiosInstance.get(`/category`);
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
