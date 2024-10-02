/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import axiosInstance from "@/lib/axiosInstance";
import { FieldValues } from "react-hook-form";

export const createComment = async (commentData: FieldValues) => {
  try {
    const { data } = await axiosInstance.post(
      "/comment/add-comment",
      commentData
    );

    //   revalidateTag("animalPosts");

    return data;
  } catch (err: any) {
    throw new Error(err);
  }
};
