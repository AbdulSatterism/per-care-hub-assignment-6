import { getAnimalPosts } from "@/services/AnimalPosts";
import { IAnimal } from "@/types";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import Image from "next/image";

const MyPost = async () => {
  const { data } = await getAnimalPosts();

  const token = cookies().get("accessToken")?.value;

  const loginUser: { userId: string } = await jwtDecode(token as string);

  const myPostData = data?.filter(
    (animal: IAnimal) => animal.user._id === loginUser?.userId
  );

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
        <thead>
          <tr>
            <th className="px-4 py-2 border-b-2 border-gray-200 text-left">
              Image
            </th>
            <th className="px-4 py-2 border-b-2 border-gray-200 text-left">
              Category
            </th>
            <th className="px-4 py-2 border-b-2 border-gray-200 text-left">
              Host
            </th>
            <th className="px-4 py-2 border-b-2 border-gray-200 text-left">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {myPostData.map((animal: IAnimal) => (
            <tr key={animal._id} className="hover:bg-gray-100">
              <td className="px-4 py-2 border-b border-gray-200">
                <Image
                  src={animal?.image}
                  alt="image"
                  width={32}
                  height={32}
                  className="rounded-full"
                />
              </td>

              <td className="px-4 py-2 border-b border-gray-200">
                {animal?.category?.name}
              </td>

              <td className="px-4 py-2 border-b border-gray-200">
                {animal?.user?.name}
              </td>

              <td className="px-4 py-2 border-b border-gray-200">
                <button className="text-blue-600 hover:underline mr-2">
                  Edit
                </button>
                <button className="text-red-600 hover:underline">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyPost;
