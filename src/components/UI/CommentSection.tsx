/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { IComment } from "@/types";
import PCModal from "../modal/PCModal";

type IProps = {
  comments: any;
  id: string;
};

const CommentSection = ({ comments, id }: IProps) => {
  const review = comments?.filter(
    (comment: IComment) => comment?.animal === id
  );

  return (
    <PCModal
      buttonClassName="w-full flex-1 text-xl"
      buttonText="show comment"
      title="see comment"
    >
      {review?.map((rv: any) => (
        <div key={rv?._id}>
          <p className="text-xl text-gray-600">{rv?.comment}</p>
          <p className="text-sm text-gray-400"> {rv?.email}</p>
        </div>
      ))}
    </PCModal>
  );
};

export default CommentSection;
