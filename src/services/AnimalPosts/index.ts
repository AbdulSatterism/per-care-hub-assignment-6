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

export const updateOwnPost = async (id: string, updateData: FieldValues) => {
  try {
    const { data } = await axiosInstance.patch(`/animal/${id}`, updateData);

    revalidateTag("animalPosts");

    return data;
  } catch (err: any) {
    throw new Error(err);
  }
};

export const deleteOwnPost = async (id: string) => {
  try {
    const { data } = await axiosInstance.delete(`/animal/${id}`);

    revalidateTag("animalPosts");

    return data;
  } catch (err: any) {
    throw new Error(err);
  }
};

export const updatePostByAdmin = async (
  id: string,
  updateData: FieldValues
) => {
  try {
    const { data } = await axiosInstance.patch(
      `/animal/post-update-admin/${id}`,
      updateData
    );

    revalidateTag("animalPosts");

    return data;
  } catch (err: any) {
    throw new Error(err);
  }
};

export const postDeleteByAdmin = async (id: string) => {
  try {
    const { data } = await axiosInstance.delete(
      `/animal/post-delete-admin/${id}`
    );

    revalidateTag("animalPosts");

    return data;
  } catch (err: any) {
    throw new Error(err);
  }
};

// find animal for client
export const getAnimalFrClient = async () => {
  try {
    const { data } = await axiosInstance.get(`/animal`);

    revalidateTag("animalPosts");

    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
