import Posts from "@/components/UI/Posts";
import SliderBanner from "@/components/UI/Slider";
import { getAnimalPosts } from "@/services/AnimalPosts";
import { getCurrentUser } from "@/services/AuthService";

export default async function Home() {
  const { data } = await getAnimalPosts();

  await getCurrentUser();

  return (
    <>
      <SliderBanner />
      <Posts data={data} />
    </>
  );
}
