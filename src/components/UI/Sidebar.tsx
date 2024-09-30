"use client";
import Link from "next/link";
// import { Button } from "@nextui-org/button";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const sideLinks = (
    <>
      <Link href="/" className="block p-2 hover:bg-gray-700 rounded">
        Home
      </Link>
      <Link href="/" className="block p-2 hover:bg-gray-700 rounded">
        About
      </Link>
      <Link href="/" className="block p-2 hover:bg-gray-700 rounded">
        Contact
      </Link>
    </>
  );

  return (
    <div className="flex">
      {/* Sidebar for larger screens */}
      <div
        style={{ height: "100vh", position: "sticky", left: "0", top: "0" }}
        className="hidden  md:block  w-64  p-4"
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
            className="bg-black opacity-50 w-full"
            onClick={toggleSidebar}
          ></div>
        </div>
      )}
    </div>

    // <aside className="w-64 hidden md:block">
    //   <nav className="space-y-2">
    //     <Button className="w-full justify-start">Home</Button>
    //     <Button className="w-full justify-start">Profile</Button>
    //     <Button className="w-full justify-start">Messages</Button>
    //     <Button className="w-full justify-start">Notifications</Button>
    //   </nav>
    // </aside>
  );
};

export default Sidebar;
