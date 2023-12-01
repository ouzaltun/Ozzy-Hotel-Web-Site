import Link from "next/link";
import Nav from "./Nav";
import React from "react";
import MobileNav from "./MobileNav";
import { Button } from "./ui/button";

function Header() {
  return (
    <header className="absolute w-full max-w-[1440px] py-8 xl:py-10">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Link href="/">
            <h1 className="text-3xl font-bold text-white">Hotely</h1>
          </Link>
          <div className="hidden xl:flex ">
            <div className="flex items-center gap-x-12">
              <Nav
                containerStyles="flex items-center justify-between"
                listStyles="flex items-center gap-x-12 text-white"
              ></Nav>
              <Button variant="outline" className="px-10 h-[58px]">
                Login
              </Button>
            </div>
          </div>
        </div>
        <div className="xl:hidden absolute right-8 top-8 ">
          {" "}
          <MobileNav></MobileNav>
        </div>
      </div>
    </header>
  );
}

export default Header;
