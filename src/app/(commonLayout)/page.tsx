import Posts from "@/components/UI/Posts";
import SliderBanner from "@/components/UI/Slider";
import { getAnimalPosts } from "@/services/AnimalPosts";

export default async function Home() {
  const { data } = await getAnimalPosts();

  return (
    <>
      <SliderBanner />
      <Posts data={data} />
    </>
  );
}
