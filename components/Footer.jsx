"use client";
import Image from "next/image";
import Socials from "./Socials";
import Link from "next/link";
import React from "react";

import { fadeIn } from "@/variants";
import { motion } from "framer-motion";

function Footer() {
  return (
    <footer className="bg-soft_green-secondary relative pt-12 xl:pt-0">
      <div className="container mx-auto">
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: "0" }}
        >
          <div className="flex flex-col xl:flex-row bg-white p-8 rounded-xl min-h-[394px] xl:p-20 xl:-translate-y-36 xl:gap-x-12 ">
            <div className="xl:w-[470px] mb-6 xl:mb-0">
              <Link href="/">
                <Image
                  height={36}
                  width={80}
                  alt="footer-logo"
                  src="/footer/logo.svg"
                ></Image>
                <p className="text-lg leading-9 mt-4 ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                  dolores consectetur nobis numquam cum asperiores, deleniti
                  debitis. Facere quam numquam sit eaque ad maxime animi magni.
                  Soluta sunt expedita molestiae!
                </p>
              </Link>
            </div>
            <div className="flex xl:gap-x-16 xl:ml-32 ">
              <div className="flex-1">
                <h4 className="h4 mb-6">Navigation</h4>
                <ul className="flex flex-col gap-y-6 text-lg">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/">Find Hotel</Link>
                  </li>
                  <li>
                    <Link href="/">About Us</Link>
                  </li>
                  <li>
                    <Link href="/">Contact Us</Link>
                  </li>
                </ul>
              </div>
              <div className="flex-1">
                <h4 className="h4 mb-6">Contact Us</h4>
                <ul className="flex flex-col gap-y-6 text-lg">
                  <li>+62122331233</li>
                  <li>info@ozzy.com</li>
                  <li>ozzy.com</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
        <div className="py-12 xl:-mt-32 flex flex-col xl:flex-row xl:justify-between">
          <p className="text-black font-semibold text-center mb-4 xl:mb-0">
            Copyright &copy; 2023. All rights reserved.
          </p>
          <Socials
            containerStyles={
              "flex w-full gap-x-4 text-black justify-center items-center xl:mx-0"
            }
          ></Socials>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
