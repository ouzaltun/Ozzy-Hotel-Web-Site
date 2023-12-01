import React from "react";
import SearchBox from "./SearchBox";

function Hero() {
  return (
    <section className="pt-24 pb-12 xl:py-0 xl:h-[1087px] xl:bg-hero bg-hero2 bg-cover bg-center bg-no-repeat flex justify-center items-center">
      <div className="container mx-auto flex items-center justify-center xl:justify-start">
        <SearchBox></SearchBox>
      </div>
    </section>
  );
}

export default Hero;
