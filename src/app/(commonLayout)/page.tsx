import PageLoading from "@/components/loading/PageLoading";
import PostCreate from "@/components/UI/PostCreate";
import Posts from "@/components/UI/Posts";
import SliderBanner from "@/components/UI/Slider";
import { getAnimalPosts } from "@/services/AnimalPosts";
import { getAllComment } from "@/services/Comment";
import { Suspense } from "react";

export default async function Home() {
  const { data } = await getAnimalPosts();
  const { data: comments } = await getAllComment();

  return (
    <>
      <Suspense fallback={<PageLoading />}>
        <SliderBanner />
      </Suspense>
      <Suspense fallback={<PageLoading />}>
        <PostCreate />
      </Suspense>
      <Suspense fallback={<PageLoading />}>
        <Posts data={data} comments={comments} />
      </Suspense>
    </>
  );
}
