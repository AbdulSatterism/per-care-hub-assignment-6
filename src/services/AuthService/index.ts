/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";
import axiosInstance from "@/lib/axiosInstance";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";

export const userRegister = async (userData: FieldValues) => {
  try {
    const { data } = await axiosInstance.post("/auth/signup", userData);

    if (data?.success) {
      cookies().set("accessToken", data.token);
    }

    return data;
  } catch (err: any) {
    throw new Error(err);
  }
};

export const userLogin = async (userData: FieldValues) => {
  try {
    const { data } = await axiosInstance.post("/auth/login", userData);

    if (data?.success) {
      cookies().set("accessToken", data.token);
    }

    return data;
  } catch (err: any) {
    throw new Error(err);
  }
};

export const getCurrentUser = async () => {
  const token = cookies().get("accessToken")?.value;

  let decodedToken = null;

  if (token) {
    decodedToken = await jwtDecode(token);

    return {
      userId: decodedToken?.userId,
      role: decodedToken?.role,
      email: decodedToken?.email,
      image: decodedToken?.image,
      name: decodedToken?.name,
    };
  }

  return decodedToken;
};
