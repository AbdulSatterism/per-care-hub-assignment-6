"use client";
import PageLoading from "@/components/loading/PageLoading";
import {
  useDeleteUserByAdmin,
  useGetAllUserByAdmin,
  useUserToggleRole,
} from "@/hooks/user.hook";
import { IUserAll } from "@/types";
import { FaTrash } from "react-icons/fa";
import Image from "next/image";
import { Button } from "@nextui-org/button";

const AllUser = () => {
  const { data, isPending } = useGetAllUserByAdmin();
  const { mutate: roleToggle, isPending: rolePending } = useUserToggleRole();

  const { mutate: handleUserDelete, isPending: deletePending } =
    useDeleteUserByAdmin();

  const handleDelete = (id: string) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this user"
    );
    if (confirmed) {
      handleUserDelete(id);
    }
  };

  if (isPending) {
    return <PageLoading />;
  }

  return (
    <div className="overflow-x-auto mt-10 p-4">
      <h1 className="text-center items-center text-[#21acb1] uppercase text-2xl my-4">
        total users :{data?.data?.length}{" "}
      </h1>
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
        <thead>
          <tr className="text-lg text-center border-1 p-2 py-4 m-4 border-[#21acb1] text-[#21acb1]">
            <th>Image</th>
            <th>Name</th>
            <th>Email</th>
            <th>update-role</th>
            <th>delete</th>
          </tr>
        </thead>
        <tbody>
          {data?.data?.map((user: IUserAll) => (
            <tr
              key={user._id}
              className="border-1 m-2 border-[#21acb1] p-2 py-4"
            >
              <td>
                <Image
                  src={user?.image}
                  alt="image"
                  width={32}
                  height={32}
                  className="rounded-full w-16 h-16 text-right"
                />
              </td>

              <td className="text-center">{user?.name}</td>

              <td className="text-center">{user?.email}</td>

              <td className="text-center">
                <Button
                  disabled={rolePending}
                  className="bg-[#21acb1] p-2"
                  onClick={() => roleToggle(user?._id)}
                >
                  {user?.role}
                </Button>
              </td>

              <td className="text-center">
                <Button
                  disabled={deletePending}
                  onClick={() => handleDelete(user._id)}
                  className="text-red-600 p-2"
                >
                  <FaTrash />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllUser;
