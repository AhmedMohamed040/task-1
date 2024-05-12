import React, { useMemo } from "react";
import getScrollAnimation from "../utils/getScrollAnimation";
import { motion } from "framer-motion";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const Hero = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className=" text-center bg-cover h-[300px] md:h-[600px] object-cover bg-[url('/assets/Hero.jpg')]  mx-auto flex justify-center items-center"
      id="home"
    >
      <motion.div
        variants={scrollAnimation}
        whileHover={{
          scale: 1.1,
          transition: {
            duration: 0.3,
          },
        }}
      >
        <ScrollAnimationWrapper className="]">
          
          <motion.h3
            variants={scrollAnimation}
            className=" text-white-500 text-2xl sm:text-3xl leading-6 md:text-5xl  lg:text-7xl font-thin md:leading-tight"
          >
            ENJOY YOUR EGYPT <br /> VACATION WITH US{" "}
          </motion.h3>
        </ScrollAnimationWrapper>
      </motion.div>
    </div>
  );
};

export default Hero;
