"use client";
import Link from "next/link";
// import { Button } from "@nextui-org/button";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { FaHome, FaUserCog } from "react-icons/fa";
import { MdOutlinePhonelinkSetup } from "react-icons/md";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
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
        href="/"
        className="flex p-2 text-xl hover:text-[#05caec] hover:bg-gray-100  rounded gap-2 items-center"
      >
        <FaUserCog />
        About
      </Link>
      <Link
        href="/"
        className=" flex p-2 text-xl hover:text-[#05caec] hover:bg-gray-100  rounded gap-2 items-center"
      >
        <MdOutlinePhonelinkSetup />
        Contact
      </Link>
      <Link
        href="/"
        className=" flex p-2 text-xl hover:text-[#05caec] hover:bg-gray-100  rounded gap-2 items-center"
      >
        <CgProfile />
        Profile
      </Link>
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
