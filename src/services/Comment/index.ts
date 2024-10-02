/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { envConfig } from "@/envConfig";
import axiosInstance from "@/lib/axiosInstance";
import { revalidateTag } from "next/cache";
import { FieldValues } from "react-hook-form";

export const createComment = async (commentData: FieldValues) => {
  try {
    const { data } = await axiosInstance.post(
      "/comment/add-comment",
      commentData
    );

    revalidateTag("comments");

    return data;
  } catch (err: any) {
    throw new Error(err);
  }
};

export const getAllComment = async () => {
  const fetchOption = {
    next: {
      tags: ["comments"],
    },
  };
  const res = await fetch(`${envConfig.baseApi}/comment`, fetchOption);

  return res.json();
};
