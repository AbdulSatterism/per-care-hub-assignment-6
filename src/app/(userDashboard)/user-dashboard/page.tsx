/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import PageLoading from "@/components/loading/PageLoading";
import { useUser } from "@/context/user.provider";
import { animalForClient } from "@/hooks/animal.hook";
import { IAnimal } from "@/types";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const UserHome = () => {
  const { data: animalData, isPending } = animalForClient();
  const { user } = useUser();

  const myPostData = animalData?.data?.filter(
    (animal: IAnimal) => animal.user._id === user?.userId
  );

  // Ensure values are numeric and default to 0 if undefined or null
  const totalPosts = myPostData?.length || 0;
  const totalLikes = myPostData?.reduce(
    (acc: any, post: { like: any }) => acc + (post.like || 0),
    0
  );
  const totalDislikes = myPostData?.reduce(
    (acc: any, post: { disLike: any }) => acc + (post.disLike || 0),
    0
  );
  const totalFollowers = myPostData?.reduce(
    (acc: any, post: { user: { follower: any } }) =>
      acc + (post.user.follower || 0),
    0
  );

  // Pie Chart Data
  const data = [
    { name: "Total Posts", value: totalPosts || 1 },
    { name: "Total Likes", value: totalLikes || 1 },
    { name: "Total Dislikes", value: totalDislikes || 1 },
    { name: "Total Followers", value: totalFollowers || 1 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  const RADIAN = Math.PI / 180;

  // Render the actual values for the Pie chart
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    value,
    index,
  }: any) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        fontSize={16} /* Bigger font size */
        fontWeight="bold"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${data[index].name}: ${value}`}
      </text>
    );
  };

  if (isPending) {
    return <PageLoading />;
  }

  return (
    <div className="flex justify-center items-center h-full w-full">
      <ResponsiveContainer width="100%" height={600}>
        <PieChart width={600} height={600}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={280}
            innerRadius={20}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UserHome;
