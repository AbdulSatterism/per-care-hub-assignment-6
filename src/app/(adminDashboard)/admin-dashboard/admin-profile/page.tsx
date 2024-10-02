"use client";
import PageLoading from "@/components/loading/PageLoading";
import UserUpdateModal from "@/components/modal/UserUpdateModal";
import { getUserForProfile } from "@/hooks/user.hook";
import { Button, Image } from "@nextui-org/react";

const AdminProfile = () => {
  const { data, isPending } = getUserForProfile();

  if (isPending) {
    return <PageLoading />;
  }

  return (
    <div className="hero p-4   min-h-screen">
      <div className="hero-content mx-auto justify-center items-center  p-6 w-full shadow-sm  shadow-blue-600 flex-col lg:flex-row-reverse gap-6">
        <Image
          src={data?.data?.image}
          className="sm:w-full lg:w-1/3 rounded-lg"
          alt="image"
        />
        <div className="sm:w-full lg:w-2/3">
          <h1 className="text-4xl font-bold text-[#05caec]">
            {data?.data?.name}
          </h1>
          <div className="my-6 text-xl">
            <p className="">Email: {data?.data?.email}</p>
            <p className="">Phone: {data?.data?.phone}</p>
            <p className="">Role: {data?.data?.role}</p>
            <p className="">payment: {data?.data?.payment}</p>
            <p className="">followers: {data?.data?.follower}</p>
          </div>

          <div className="flex justify-between">
            <UserUpdateModal
              name={data?.data?.name}
              phone={data?.data?.phone}
            />
            <Button
              variant="bordered"
              className="mt-4 px-4 py-2 bg-[#05caec] text-white rounded"
            >
              payment
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
