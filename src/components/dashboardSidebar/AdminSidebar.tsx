"use client";

import { Button } from "@nextui-org/button";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FaHome, FaUserCog } from "react-icons/fa";

const AdminSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  //   const handleLogout = () => {
  //     logout();
  //     setIsLoading(true);
  //   };

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
        href="/admin-dashboard/all-user"
        className="flex p-2 text-xl hover:text-[#05caec] hover:bg-gray-100  rounded gap-2 items-center"
      >
        <FaUserCog />
        All user
      </Link>
      <Link
        href="/admin-dashboard/all-post"
        className="flex p-2 text-xl hover:text-[#05caec] hover:bg-gray-100  rounded gap-2 items-center"
      >
        <FaUserCog />
        All Post
      </Link>

      {/*
      <Link
        href="/"
        className=" flex p-2 text-xl hover:text-[#05caec] hover:bg-gray-100  rounded gap-2 items-center"
      >
        <MdOutlinePhonelinkSetup />
        Contact
      </Link>

      <Divider className="my-4" />

      {user && user?.email ? (
        <>
          <Link
            href="/"
            className=" flex p-2 text-xl hover:text-[#05caec] hover:bg-gray-100  rounded gap-2 items-center"
          >
            <CgProfile />
            Profile
          </Link>

          <Divider className="my-4" />

          <Button onClick={() => handleLogout()} variant="bordered">
            Logout
          </Button>
        </>
      ) : (
        <>
          <Link
            href="/login"
            className=" flex p-2 text-xl hover:text-[#05caec] hover:bg-gray-100  rounded gap-2 items-center"
          >
            <Button variant="bordered">Login</Button>
          </Link>
        </>
      )} */}
    </>
  );

  return (
    <div className="flex ">
      {/* Sidebar for larger screens */}
      <div
        style={{ height: "100vh", position: "sticky", left: "0", top: "0" }}
        className="hidden  bg-[#07074F] text-white md:block  w-80  p-4 mx-auto"
      >
        <ul className="mt-4 space-y-4">
          <li>{sideLinks}</li>
        </ul>
      </div>

      {/* Mobile Hamburger Menu */}
      <div className="md:hidden  shadow-lg text-gray-900">
        <Button variant="light" onClick={toggleSidebar}>
          <AiOutlineMenu />
        </Button>
      </div>

      {/* Mobile Sidebar Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div className=" bg-[#07074F] text-white w-64 p-4 space-y-4">
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

export default AdminSidebar;
