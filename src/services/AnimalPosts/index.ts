/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { envConfig } from "@/envConfig";
import axiosInstance from "@/lib/axiosInstance";
import { revalidateTag } from "next/cache";
import { FieldValues } from "react-hook-form";

export const createAnimalPost = async (postData: FieldValues) => {
  try {
    const { data } = await axiosInstance.post(
      "/animal/create-animal",
      postData
    );

    revalidateTag("animalPosts");

    return data;
  } catch (err: any) {
    throw new Error(err);
  }
};

export const getAnimalPosts = async () => {
  const fetchOption = {
    next: {
      tags: ["animalPosts"],
    },
  };
  const res = await fetch(`${envConfig.baseApi}/animal`, fetchOption);

  return res.json();
};

export const incrementLike = async (id: string) => {
  try {
    const { data } = await axiosInstance.patch(`/animal/like/${id}`);

    revalidateTag("animalPosts");

    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const incrementDisLike = async (id: string) => {
  try {
    const { data } = await axiosInstance.patch(`/animal/disLike/${id}`);

    revalidateTag("animalPosts");

    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
