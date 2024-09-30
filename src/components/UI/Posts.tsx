"use client";
import { IAnimal } from "@/types";
import { Card, CardBody } from "@nextui-org/card";
import { Avatar, Button, Image, Input } from "@nextui-org/react";
import { FaCaretRight } from "react-icons/fa";

const Posts = ({ data }: { data: IAnimal[] }) => {
  return (
    <div className="border border-black">
      {data?.map((animal: IAnimal) => (
        <Card
          key={animal?._id}
          className=" border-b-1 p-6 border-black rounded-none"
        >
          <CardBody>
            <div className="flex items-center mb-4">
              <Avatar src={animal?.user?.image} size="lg" className="mr-4" />
              <div>
                <p className="font-semibold">Follower</p>
              </div>
            </div>

            <p className="mb-4 justify-center text-[16px]">
              {animal?.description}
            </p>

            <div>
              {animal?.tips.map((tp, i) => (
                <p key={i} className="flex text-[16px] items-center gap-1">
                  <FaCaretRight className="text-[#05caec]" />
                  {tp}
                </p>
              ))}
            </div>

            <Image
              src={animal?.image}
              alt="animal"
              className="w-full h-full p-2 items-center object-cover mb-4 mx-auto"
            />
            <p className="text-xl font-extrabold text-gray-500 mb-2">
              {animal?.category?.name}
            </p>

            <div className="flex items-center  space-x-4">
              <Button>Like :{animal?.like}</Button>
              <Button>Dislike :{animal?.disLike}</Button>
              <Input placeholder="Add a comment..." />
            </div>
          </CardBody>
        </Card>
      ))}
    </div>
  );
};

export default Posts;
