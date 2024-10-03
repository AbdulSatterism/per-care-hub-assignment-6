import PageLoading from "@/components/loading/PageLoading";
import Banner from "@/components/UI/Banner";
import PostCreate from "@/components/UI/PostCreate";
import Posts from "@/components/UI/Posts";
import { getAnimalPosts } from "@/services/AnimalPosts";
import { getAllComment } from "@/services/Comment";
import { Suspense } from "react";

export default async function Home() {
  const { data } = await getAnimalPosts();
  const { data: comments } = await getAllComment();

  return (
    <>
   
        <Banner />
    
      <Suspense fallback={<PageLoading />}>
        <PostCreate />
      </Suspense>
      <Suspense fallback={<PageLoading />}>
        <Posts data={data} comments={comments} />
      </Suspense>
    </>
  );
}
