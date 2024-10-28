/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { IComment } from "@/types";
import PCModal from "../modal/PCModal";
import { FaTrash } from "react-icons/fa";
import { useUser } from "@/context/user.provider";

type IProps = {
  comments: any;
  id: string;
  userId: string;
};

const CommentSection = ({ comments, id, userId }: IProps) => {
  const { user } = useUser();
  const review = comments?.filter(
    (comment: IComment) => comment?.animal === id
  );

  // const handleDelete = (id: string) => {
  //   const confirmed = window.confirm("Are you sure you want to delete post");
  //   if (confirmed) {
  //     handleOwnDelete(id);
  //   }
  // };

  return (
    <PCModal
      buttonClassName="w-full flex-1  border-0 "
      buttonText="show comment"
      title="see comment"
    >
      {review?.map((rv: any) => (
        <div key={rv?._id} className="flex justify-between items-center">
          <div>
            <p className="text-xl text-gray-600">{rv?.comment}</p>
            <p className="text-sm text-gray-400"> {rv?.email}</p>
          </div>

          <button
            disabled={user ? user?.userId !== userId : true}
            // onClick={() => handleDelete(animal._id)}
            className="flex items-center btn"
          >
            <FaTrash className="mr-2" />
          </button>
        </div>
      ))}
    </PCModal>
  );
};

export default CommentSection;
