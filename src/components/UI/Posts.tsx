"use client";
import { useUser } from "@/context/user.provider";
import {
  useDeleteOwnPost,
  useIncrementDisLike,
  useIncrementLike,
} from "@/hooks/animal.hook";
import { useIncrementFollower } from "@/hooks/auth.hook";
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
import { FaCaretRight, FaCrown, FaTrash } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import UpdatePostModal from "../modal/updatePostModal";
import CreateCommentModal from "../modal/CreateCommentModal";
import CommentSection from "./CommentSection";
import { IAnimal, IComment } from "@/types";

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
    <Card className="border-b border-gray-200 dark:border-gray-700 rounded-none shadow-sm">
      {data?.map((animal: IAnimal) => (
        <CardBody key={animal?._id} className="p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6">
            <div className="flex items-center mb-2 sm:mb-0">
              <Avatar src={animal?.user?.image} size="lg" className="mr-3" />
              <div>
                <p className="font-semibold text-sm sm:text-base">
                  {animal?.user?.name}
                </p>
                <Button
                  isDisabled={followerPending}
                  onClick={() => handleIncrementFollower(animal?.user?._id)}
                  variant="light"
                  size="sm"
                  className="px-2 py-1 text-xs sm:text-sm"
                >
                  {animal?.user?.payment === "paid" ? (
                    <FaCrown className="text-yellow-400 text-xl mr-1" />
                  ) : (
                    <IoMdNotifications className="text-blue-500 text-xl mr-1" />
                  )}
                  {animal?.user?.follower}
                </Button>
              </div>
            </div>
            <Dropdown>
              <DropdownTrigger>
                <Button
                  isDisabled={user ? user?.userId !== animal?.user?._id : true}
                  color="default"
                  variant="light"
                  size="sm"
                >
                  <BsThreeDotsVertical className="text-gray-500" />
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Post Actions">
                <DropdownItem>
                  <UpdatePostModal
                    id={animal._id}
                    description={animal.description}
                  />
                </DropdownItem>
                <DropdownItem
                  key="delete"
                  className="text-danger"
                  color="danger"
                >
                  <button
                    onClick={() => handleDelete(animal._id)}
                    className="flex items-center"
                  >
                    <FaTrash className="mr-2" /> Delete
                  </button>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>

          <p className="text-sm sm:text-base mb-3">{animal?.description}</p>

          <div className="mb-3">
            {animal?.tips.map((tip, i) => (
              <p key={i} className="flex items-center text-xs sm:text-sm mb-1">
                <FaCaretRight className="text-blue-500 mr-1" />
                {tip}
              </p>
            ))}
          </div>

          <Image
            src={animal?.image}
            alt="Post image"
            className="w-full max-h-96 object-cover rounded-lg mb-3"
          />

          <p className="text-sm font-semibold text-gray-600 dark:text-gray-300 mb-3">
            {animal?.category?.name}
          </p>

          <div className="flex flex-wrap items-center gap-2 sm:gap-4">
            <Button
              isDisabled={isLikePending}
              onClick={() => handleIncrementLike(animal?._id)}
              variant="light"
              size="sm"
              className="flex-1 sm:flex-none"
            >
              <BiSolidLike className="text-blue-500  text-xl mr-1" />
              {animal?.like}
            </Button>

            <Button
              isDisabled={disLikePending}
              onClick={() => handleIncrementDisLike(animal?._id)}
              variant="light"
              size="sm"
              className="flex-1 sm:flex-none"
            >
              <BiSolidDislike className="text-gray-500 text-xl mr-1" />
              {animal?.disLike}
            </Button>

            <CommentSection comments={comments} id={animal._id} />

            <CreateCommentModal
              animal={animal?._id}
              email={animal?.user?.email}
            />
          </div>
        </CardBody>
      ))}
    </Card>
  );
};

export default Posts;
