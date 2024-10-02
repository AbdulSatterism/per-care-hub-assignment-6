"use client";
import { useUser } from "@/context/user.provider";
import {
  useDeleteOwnPost,
  useIncrementDisLike,
  useIncrementLike,
} from "@/hooks/animal.hook";
import { useIncrementFollower } from "@/hooks/auth.hook";
import { IAnimal, IComment } from "@/types";
import { Card, CardBody } from "@nextui-org/card";
import {
  Avatar,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Image,
} from "@nextui-org/react";
import { BiSolidDislike, BiSolidLike } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaCaretRight, FaTrash } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import UpdatePostModal from "../modal/updatePostModal";
import CreateCommentModal from "../modal/CreateCommentModal";
import CommentSection from "./CommentSection";

const Posts = ({
  data,
  comments,
}: {
  data: IAnimal[];
  comments: IComment[];
}) => {
  const { user } = useUser();
  const { mutate: handleIncrementLike, isPending: isLikePending } =
    useIncrementLike();
  const { mutate: handleIncrementDisLike, isPending: disLikePending } =
    useIncrementDisLike();

  const { mutate: handleIncrementFollower, isPending: followerPending } =
    useIncrementFollower();

  const { mutate: handleOwnDelete } = useDeleteOwnPost();

  const handleDelete = (id: string) => {
    const confirmed = window.confirm("Are you sure you want to delete post");
    if (confirmed) {
      handleOwnDelete(id);
    }
  };

  return (
    <div className="border border-black">
      {data?.map((animal: IAnimal) => (
        <Card
          key={animal?._id}
          className=" border-b-1 p-6 border-black rounded-none"
        >
          <CardBody>
            <div className="flex justify-between text-center items-center mb-8">
              <div className="flex items-center ">
                <Avatar src={animal?.user?.image} size="lg" className="mr-4" />

                <Button
                  isDisabled={followerPending}
                  onClick={() => handleIncrementFollower(animal?.user?._id)}
                  variant="light"
                >
                  <IoMdNotifications className="text-[#05caec] text-xl" />
                  {animal?.user?.follower}
                </Button>
              </div>
              <div>
                <Dropdown>
                  <DropdownTrigger>
                    <Button
                      isDisabled={
                        user ? user?.userId !== animal?.user?._id : true
                      }
                      color="default"
                      variant="light"
                    >
                      <BsThreeDotsVertical className="text-[#05caec] text-xl" />
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu aria-label="Static Actions">
                    <DropdownItem key="edit">
                      <UpdatePostModal
                        id={animal._id}
                        description={animal.description}
                      />
                    </DropdownItem>
                    <DropdownItem key="delete">
                      <button
                        onClick={() => handleDelete(animal._id)}
                        className="text-red-600 p-2"
                      >
                        <FaTrash />
                      </button>
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
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
              <Button
                isDisabled={isLikePending}
                onClick={() => handleIncrementLike(animal?._id)}
                variant="light"
              >
                <BiSolidLike className="text-[#05caec] text-xl" />
                {animal?.like}
              </Button>

              <Button
                isDisabled={disLikePending}
                onClick={() => handleIncrementDisLike(animal?._id)}
                variant="light"
              >
                <BiSolidDislike className="text-[#7f9599] text-xl" />
                {animal?.disLike}
              </Button>

              {/* reviews */}
              <CommentSection comments={comments} id={animal._id} />

              <CreateCommentModal
                animal={animal?._id}
                email={animal?.user?.email}
              />
            </div>
          </CardBody>
        </Card>
      ))}
    </div>
  );
};

export default Posts;
