"use server";

import { envConfig } from "@/envConfig";

export const getAnimalPosts = async () => {
  const fetchOption = {
    next: {
      tags: ["animalPosts"],
    },
  };
  const res = await fetch(`${envConfig.baseApi}/animal`, fetchOption);

  return res.json();
};
