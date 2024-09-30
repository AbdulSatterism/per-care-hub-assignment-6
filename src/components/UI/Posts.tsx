"use client";
import { Card, CardBody } from "@nextui-org/card";
import { Button, Image, Input } from "@nextui-org/react";

const Posts = () => {
  return (
    <div className="space-y-8">
      {[...Array(5)].map((_, i) => (
        <Card key={i}>
          <CardBody>
            <Image
              src={`/api/placeholder/400/${300 + i * 50}`}
              alt="Post image"
              className="w-full h-64 object-cover mb-4"
            />
            <p className="text-sm text-gray-500 mb-2">Category {i + 1}</p>
            <p className="mb-4">
              This is a sample post content for post number {i + 1}.
            </p>
            <div className="flex items-center space-x-4">
              <Button>Like</Button>
              <Button>Dislike</Button>
              <Input placeholder="Add a comment..." />
            </div>
          </CardBody>
        </Card>
      ))}
    </div>
  );
};

export default Posts;
