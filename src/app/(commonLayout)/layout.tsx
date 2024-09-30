import TopNavbar from "@/components/UI/Navbar";
import Sidebar from "@/components/UI/Sidebar";

const commonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-screen-xl min-h-screen mx-auto bg-gray-100">
      <TopNavbar />
      <div className="container mx-auto px-4 py-8 flex">
        <Sidebar />
        <main className="flex-1 ml-0 md:ml-8">{children}</main>
      </div>
    </div>
  );
};

export default commonLayout;
