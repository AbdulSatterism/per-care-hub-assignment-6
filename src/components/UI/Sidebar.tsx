"use client";
import { useUser } from "@/context/user.provider";
import { Divider } from "@nextui-org/divider";
import Link from "next/link";
import { Button } from "@nextui-org/button";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FaHome, FaUserCog } from "react-icons/fa";
import { MdDashboard, MdOutlinePhonelinkSetup } from "react-icons/md";
import { logout } from "@/services/AuthService";

const Sidebar = () => {
  const { user, setIsLoading } = useUser();

  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    logout();
    setIsLoading(true);
  };

  const sideLinks = (
    <>
      <Link
        href="/"
        className="flex p-2 text-xl hover:text-[#05caec] hover:bg-gray-100  rounded gap-2 items-center"
      >
        <FaHome />
        Home
      </Link>
      <Link
        href="/about"
        className="flex p-2 text-xl hover:text-[#05caec] hover:bg-gray-100  rounded gap-2 items-center"
      >
        <FaUserCog />
        About
      </Link>
      <Link
        href="/contact"
        className=" flex p-2 text-xl hover:text-[#05caec] hover:bg-gray-100  rounded gap-2 items-center"
      >
        <MdOutlinePhonelinkSetup />
        Contact
      </Link>

      <Divider className="my-4" />

      {user && user?.role === "admin" ? (
        <Link
          href="/admin-dashboard"
          className=" flex p-2 text-xl hover:text-[#05caec] hover:bg-gray-100  rounded gap-2 items-center"
        >
          <MdDashboard />
          Dashboard
        </Link>
      ) : (
        <Link
          href="/user-dashboard"
          className=" flex p-2 text-xl hover:text-[#05caec] hover:bg-gray-100  rounded gap-2 items-center"
        >
          <MdDashboard />
          Dashboard
        </Link>
      )}

      {user && user?.email ? (
        <>
          <Divider className="my-4" />

          <Link
            href="/login"
            className=" flex p-2 text-xl hover:text-[#05caec] hover:bg-gray-100  rounded gap-2 items-center"
          >
            <Button
              className="text-xl "
              onClick={() => handleLogout()}
              variant="bordered"
            >
              Logout
            </Button>
          </Link>
        </>
      ) : (
        <>
          <Link
            href="/login"
            className=" flex p-2 text-xl hover:text-[#05caec] hover:bg-gray-100  rounded gap-2 items-center"
          >
            <Button className="text-xl" variant="bordered">
              Login
            </Button>
          </Link>
        </>
      )}
    </>
  );

  return (
    <div className="flex bg-white">
      {/* Sidebar for larger screens */}
      <div
        style={{ height: "100vh", position: "sticky", left: "0", top: "0" }}
        className="hidden  md:block  w-80  p-4 mx-auto"
      >
        <ul className="mt-4 space-y-4">
          <li>{sideLinks}</li>
        </ul>
      </div>

      {/* Mobile Hamburger Menu */}
      <div className="md:hidden mt-[-30px] shadow-lg text-gray-900">
        <button onClick={toggleSidebar}>
          <AiOutlineMenu />
        </button>
      </div>

      {/* Mobile Sidebar Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div className=" bg-gray-900/40 text-white w-64 p-4 space-y-4">
            <ul className="mt-4 space-y-4">
              <li>{sideLinks}</li>
            </ul>
          </div>
          <div
            className="bg-black opacity-30 w-full"
            onClick={toggleSidebar}
          ></div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
