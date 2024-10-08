"use client";

import UpdatePostModal from "@/components/modal/updatePostModal";
import { useUser } from "@/context/user.provider";
import { animalForClient } from "@/hooks/animal.hook";
import { useDeleteOwnPost } from "@/hooks/animal.hook";
import { IAnimal } from "@/types";

import Image from "next/image";
import { FaTrash } from "react-icons/fa";

const MyPost = () => {
  const { data, isPending } = animalForClient();
  const { user } = useUser();
  const { mutate: handleOwnDelete } = useDeleteOwnPost();

  const myPostData = data?.data?.filter(
    (animal: IAnimal) => animal.user._id === user?.userId
  );

  const handleDelete = (id: string) => {
    const confirmed = window.confirm("Are you sure you want to delete post");
    if (confirmed) {
      handleOwnDelete(id);
    }
  };

  if (isPending) {
    return <p>loading</p>;
  }

  return (
    <div className="overflow-x-auto mt-10 p-6">
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
        <thead>
          <tr className="text-lg text-center border-1 border-[#21acb1] text-[#21acb1]">
            <th>Image</th>
            <th>Category</th>
            <th>Host</th>
            <th>update</th>
            <th>delete</th>
          </tr>
        </thead>
        <tbody>
          {myPostData?.map((animal: IAnimal) => (
            <tr key={animal._id} className="border-1 border-[#21acb1] p-2">
              <td>
                <Image
                  src={animal?.image}
                  alt="image"
                  width={32}
                  height={32}
                  className="rounded-full w-16 h-16 text-right"
                />
              </td>

              <td className="text-center">{animal?.category?.name}</td>

              <td className="text-center">{animal?.user?.name}</td>

              <td className="text-center">
                <UpdatePostModal
                  id={animal._id}
                  description={animal.description}
                />
              </td>

              <td className="text-center">
                <button
                  onClick={() => handleDelete(animal._id)}
                  className="text-red-600 p-2"
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyPost;
