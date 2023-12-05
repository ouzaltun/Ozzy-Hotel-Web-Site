"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import { useInView } from "react-intersection-observer";
import { Button } from "./ui/button";
import { useMediaQuery } from "react-responsive";
import Stats from "./Stats";

function About() {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });
  const [ref, inView] = useInView({
    threshold: !isMobile ? 0.5 : null,
  });

  console.log(isMobile);
  return (
    <section className="py-12 xl:pt-0 xl:pb-24" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.4 }}
            className="flex-1 relative"
          >
            <Image width={559} height={721} src={"/about/img1.png"}></Image>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.4 }}
            className=" xl:max-w-[470px]"
          >
            <h2 className="h2 mb-[38px]">About Ozzy Hotel</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto
              debitis earum alias commodi, dolorum exercitationem nobis
              asperiores dolorem, accusantium hic eveniet dolores dicta minima
              tenetur fugit illo nemo voluptate eaque!
            </p>

            <div className=" my-5 xl:my-10 min-h-[35px]">
              {inView && <Stats></Stats>}
            </div>

            <p className="mb-10">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. A
              veritatis pariatur error cupiditate? Rerum sunt laboriosam
              quibusdam dolores est! Ipsa quo quisquam cumque nulla rerum
              architecto non doloremque? Reprehenderit, nobis.
            </p>
            <Button variant="accent">Daha Fazlası</Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
