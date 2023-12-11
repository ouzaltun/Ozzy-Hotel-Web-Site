"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import Image from "next/image";

const testimonialData = [
  {
    img: "/testimonials/img-1.png",
    message:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste aut dolorum perferendis tempora distinctio nisi animi, debitis odio amet in officiis earum dolore? Similique voluptates, nam quas impedit atque suscipit.",
    personName: "Ali Şengül",
    location: "Isparta",
  },
  {
    img: "/testimonials/img-2.png",
    message:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos voluptas repellendus magni minus enim eum labore dolores ut ad omnis, incidunt impedit, asperiores, nulla quae inventore consequatur deleniti aliquid perferendis.",
    personName: "Fatma Girik",
    location: "Çorum",
  },
];

const Testimonials = () => {
  return (
    <motion.section
      variants={fadeIn("up", 0.4)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: "0" }}
      className="bg-soft_green xl:h-[880px]"
    >
      <motion.div
        variants={fadeIn("up", 0.7)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: "0" }}
        className="container mx-auto"
      >
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          q
          className="xl:h-[680px] overflow-hidden"
        >
          {testimonialData.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="grid grid-cols-1 xl:grid-cols-2 py-12 xl:py-24">
                <Image
                  src={slide.img}
                  width={470}
                  height={470}
                  quality={100}
                  alt="slide-img"
                  className="hidden xl:flex "
                ></Image>

                <div className="flex-1 bg-white/20 text-white p-12">
                  <p className="text-lg leading-9 mb-8">{slide.message}</p>
                  <p className="text-xl font-bold ">{slide.personName}</p>
                  <p className="">{slide.location}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </motion.section>
  );
};

export default Testimonials;
