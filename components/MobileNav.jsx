"use client";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Nav from "./Nav";
import { Menu } from "lucide-react";
import Link from "next/link";
import Socials from "./Socials";
const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu size={36} className="text-white"></Menu>
      </SheetTrigger>
      <SheetContent side="left">
        <div
          className="flex flex-col justify-between h-full p-12
        "
        >
          <Link href="/" className="mb-24">
            <img
              src="/footer/logo.svg"
              alt="navbar-logo"
              width={90}
              height={46}
            />
          </Link>
          <Nav
            containerStyles="text-black"
            listStyles="flex flex-col gap-y-6 text-xl"
          ></Nav>

          <Socials containerStyles="flex text-black gap-x-4"></Socials>
        </div>
      </SheetContent>
    </Sheet>
  );
};
export default MobileNav;
