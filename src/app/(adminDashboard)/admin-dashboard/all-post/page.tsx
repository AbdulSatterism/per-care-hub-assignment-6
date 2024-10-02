"use client";

import PageLoading from "@/components/loading/PageLoading";
import UpdatePostByAdminModal from "@/components/modal/updatePostByAdminModal";
import { animalForClient, usePostDeleteByAdmin } from "@/hooks/animal.hook";
import { IAnimal } from "@/types";

import Image from "next/image";
import { FaTrash } from "react-icons/fa";

const AllPost = () => {
  const { data, isPending } = animalForClient();
  const { mutate: handleOwnDelete } = usePostDeleteByAdmin();

  const handleDelete = (id: string) => {
    const confirmed = window.confirm("Are you sure you want to delete post");
    if (confirmed) {
      handleOwnDelete(id);
    }
  };

  if (isPending) {
    return <PageLoading />;
  }

  return (
    <div className="overflow-x-auto mt-10 p-4">
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
        <thead>
          <tr className="text-lg text-center border-1 p-2 py-4 m-2 border-[#21acb1] text-[#21acb1]">
            <th>Image</th>
            <th>Category</th>
            <th>Host Name</th>
            <th>update</th>
            <th>delete</th>
          </tr>
        </thead>
        <tbody>
          {data?.data?.map((animal: IAnimal) => (
            <tr
              key={animal._id}
              className="border-1 m-2 border-[#21acb1] p-2 py-4"
            >
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
                <UpdatePostByAdminModal
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

export default AllPost;
