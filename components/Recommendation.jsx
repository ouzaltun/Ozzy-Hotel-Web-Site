"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { Button } from "./ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const RecommendationData = [
  {
    name: "Shanghai Hotel",
    image: "/recommendation/hotel-1.png",
    location: "Shangai, China",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ex eligendi nemo rerum vero unde nobis aliquam ut quam eaque, ducimus, recusandae deserunt. Deserunt maxime autem laboriosam, consequatur animi aperiam!",
    price: "40",
    testimonial: {
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, necessitatibus magnam! Atque, ipsa vel! Aut facere cum reprehenderit veniam.",
      personalName: "John Robert",
    },
  },
  {
    name: "Peaks Lodge",
    image: "/recommendation/hotel-2.png",
    location: "Aspen, USA",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ex eligendi nemo rerum vero unde nobis aliquam ut quam eaque, ducimus, recusandae deserunt. Deserunt maxime autem laboriosam, consequatur animi aperiam!",
    price: "155",
    testimonial: {
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, necessitatibus magnam! Atque, ipsa vel! Aut facere cum reprehenderit veniam.",
      personalName: "Robert Robert",
    },
  },
  {
    name: "Ozzy Hotel",
    image: "/recommendation/hotel-3.png",
    location: "Çorum, TR",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ex eligendi nemo rerum vero unde nobis aliquam ut quam eaque, ducimus, recusandae deserunt. Deserunt maxime autem laboriosam, consequatur animi aperiam!",
    price: "200",
    testimonial: {
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, necessitatibus magnam! Atque, ipsa vel! Aut facere cum reprehenderit veniam.",
      personalName: "Ali Al",
    },
  },
];

function Recommendation() {
  return (
    <motion.section
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: "0" }}
      className="pb-12 xl:pt-[157px] xl:pb-[112px] bg-soft_green-secondary relative"
    >
      <motion.div
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: "0" }}
      >
        <Swiper
          modules={Autoplay}
          autoplay={{ delay: 4000, disableOnInteraction: true }}
          loop
          speed={2000}
        >
          {RecommendationData.map((hotel, key) => (
            <SwiperSlide key={key}>
              <div className="flex flex-col xl:flex-row xl:pl-[135px] gap-y-12 xl:gap-y-0">
                <div className="max-w-[345px] xl:pt-8 order-2 xl:order-1 text-center mx-auto xl:text-left xl:mx-0">
                  <h2 className="h2 mb-4">{hotel.name}</h2>
                  <div className="text-soft_green text-sm mb-6 ">
                    {hotel.location}
                  </div>
                  <p className="mb-[60px]">{hotel.desc}</p>

                  <div className="flex items-center gap-x-[50px]">
                    <Button variant="accent" className="px-[44px]">
                      Şimdi İncele
                    </Button>

                    <div className="text-black">
                      <span className="font-bold text-2xl">{hotel.price}</span>
                      <span className="text-sm">/Gecelik</span>
                    </div>
                  </div>
                </div>
                <div className="order-1 xl:order-2 flex-1 flex justify-center xl:justify-end  h-[643px]">
                  <div>
                    <Image
                      src={hotel.image}
                      width={905}
                      height={528}
                      quality={100}
                      alt=""
                      className="relative xl:rounded-tl-[20px] xl:rounded-bl-[20px]"
                    ></Image>

                    <div className="bg-soft_green p-4 text-white text-center xl:text-left xl:max-w-[468px] xl:min-h-[212px] xl:absolute xl:-translate-y-1/2 xl:translate-x-1/2 xl:rounded-xl xl:px-10">
                      <p className="mb-3 max-w-md mx-auto xl:max-w-none xl:mx-0 xl:mb-6">
                        {hotel.testimonial.message}
                      </p>
                      <p className="text-xl font-bold">
                        {hotel.testimonial.personalName}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
      <Image
        src={"/recommendation/pattern.svg"}
        width={240}
        height={240}
        alt=""
        className="hidden xl:flex absolute left-[135px] -bottom-[120px]"
      ></Image>
    </motion.section>
  );
}

export default Recommendation;
