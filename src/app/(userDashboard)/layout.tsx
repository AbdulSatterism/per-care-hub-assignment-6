import UserSidebar from "@/components/dashboardSidebar/UserSidebar";

const userLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-screen-xl min-h-screen mx-auto ">
      <div className="container mx-auto  flex">
        <UserSidebar />
        <main className="flex-1 ml-0 md:ml-8">{children}</main>
      </div>
    </div>
  );
};

export default userLayout;
