"use client";

import {
  Image,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { ThemeSwitch } from "./Theme-switcher";

const TopNavbar = () => {
  return (
    <Navbar isBordered className="bg-white dark:bg-[#18181B]">
      <NavbarBrand>
        <Image
          src="https://i.ibb.co.com/kMkdpLm/pet-Animal.jpg"
          alt="Logo"
          className="mr-2 w-16 h-16 rounded-full"
        />
        <span className="font-bold text-2xl text-[#07074F] text-inherit uppercase">
          Animal Care
        </span>
      </NavbarBrand>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>
    </Navbar>
  );
};

export default TopNavbar;
