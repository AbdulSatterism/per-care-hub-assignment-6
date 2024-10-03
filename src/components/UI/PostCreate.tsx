"use client";

import { FaUserCircle } from "react-icons/fa";
import CreatePostModal from "../modal/CreatePostModal";
import { useUser } from "@/context/user.provider";
import { Button } from "@nextui-org/button";

const PostCreate = () => {
  const { user } = useUser();

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 my-4 w-full mx-auto">
      <div className="flex items-center space-x-4">
        <FaUserCircle className="text-5xl text-gray-400" />
        <div className="flex-1 bg-gray-100 rounded-full text-left py-3 px-4 text-gray-500 hover:bg-gray-200 transition-all duration-200">
          What&apos;s on your mind?
        </div>
        {!user ? (
          <Button className="text-xl" variant="bordered">
            Login for create
          </Button>
        ) : (
          <CreatePostModal />
        )}
      </div>
    </div>
  );
};

export default PostCreate;
