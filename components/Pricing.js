import React, { useMemo } from "react";
import Image from "next/image"
import Testimoni from "./Testimoni";
import ButtonPrimary from "./misc/ButtonPrimary";
import ButtonOutline from "./misc/ButtonOutline.";
import Maps from "../public/assets/HugeGlobal.svg";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const Pricing = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const gallery = [
    {
      image: "/assets/gallery/img-1.jpeg",
      text:'Egypt Luxury Tours'
    },
    {
      image: "/assets/gallery/img-2.jpg",
      text:'Egypt Cultural Tours'
    },
    {
      image: "/assets/gallery/img-3.jpeg",
      text:'Egypt Cultural Tours'
    },
    {
      image: "/assets/gallery/img-4.jpeg",
      text:'Egypt Cultural Tours'
    },
    {
      image: "/assets/gallery/img-5.jpeg",
      text:'Egypt Cultural Tours'
    },
    {
      image: "/assets/gallery/img-6.jpeg",
      text:'Egypt Cultural Tours'
    },
    {
      image: "/assets/gallery/img-7.jpg",
      text:'Egypt Cultural Tours'
    },
  ]
  return (
    <div
      className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14"
      id="trous"
      
    >
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
      <div className="flex flex-col w-full my-8" id="cruisses">
          <ScrollAnimationWrapper>
            <motion.h5
              variants={scrollAnimation}
              className="text-lg  font-thin text-sky-500 leading-normal w-9/12 sm: lg:w-4/12 mx-auto">
              TESTIMONIALS TITLE{" "}
            </motion.h5>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal mx-auto mb-2 mt-4 w-10/12 sm:w-7/12 lg:w-6/12"
            >
              Over 22 Hundred Happy Travelers.
            </motion.p>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="w-full flex flex-col py-12">
            <motion.div variants={scrollAnimation}>
              <Testimoni />
            </motion.div>
          </ScrollAnimationWrapper>
        
        </div>
        <div className="flex flex-col w-full">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed"
            >
              Recommended Tours
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal w-10/12 mx-auto my-2 text-center pt-8"
            >
              Discover the best of Egypt with our recommended Egypt tours, From captivating Egypt tours to exciting <strong className="text-sky-500">Cairo tours</strong>, Luxor tours and also enchanting <strong className="text-sky-500">Hurghada tours</strong>, we offer unforgettable experiences for every traveler. <br/>
              You can enjoy of Egypt Nile Cruise, as well cruise trips to Luxor and Aswan in Nile cruise packages in Egypt. You can visit and see the <strong className="text-sky-500">Cairo tours</strong>, Luxor tours and also enchanting <strong className="text-sky-500">Karnak Temple</strong>, Luxor Temple, Valley of <br/>
              theKings, and Hatshepsut Temple on the West Bank . <br/>
              If you are a fan of the desert and exciting experiences, you can visit the White Desert and you can also go on fun safaris, Egypt Trips offers you the best trips and <strong className="text-sky-500">Cairo tours</strong>, Luxor tours and also enchanting <strong className="text-sky-500">adventures tours</strong> in the desert, If you prefer luxury trips on the seashore in Egypt, enjoy Egypt tours and diving to see the wonderful fish and coral reefs in the Red Sea. 
            </motion.p>
          </ScrollAnimationWrapper>
          <div className="mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-12 py-8 lg:py-12 px-6 sm:px-0 lg:px-6">
          <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="mx-auto max-w-[350px] flex flex-col justify-center items-center shadow-sm rounded-xl"
                whileHover={{
                  scale :  0.9,
                  transition: {
                    duration: .2
                  }
                }}
              >
              <div className="relative top-[-17px]">
                <Image
                  src="/assets/preview.jpg"
                width={350}
                height={250}
                className="rounded-xl "
                
                  // Make the image display full width
                
                />
              </div>
              <p className="px-4 mr-[auto] text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
              Grand Egyptian Museum Trial 
              </p>
              <ul className="px-4 text-sm  flex flex-col text-left text-black-500 ">
                <li className="relative my-2 overflow-hidden line-clamp-6">{`
                 Embark on an unforgettable journey through the heart of ancient Egypt with our 5-day Luxor to Aswan Nile Cruise,
                 discover the timeless allure of the Nile River as you sail from Luxor, known as the "world's greatest open-air museum," to the picturesqu`}
                </li>
              </ul>
              <div className="min-w-[300px] text-sm rounded-lg min-h-[100px] p-2 bg-[#3eb9e91a] flex flex-col align-top text-left mb-8  mt-12">
                <p className=" text-black-500 mb-2  mt-4 text-left">
                🗺️ Egypt Day Tours, Cairo Day Tours
                </p>
                <hr className=" border-b-0 border-white-500 opacity-[0.5] " />
                <p className=" text-black-500  mt-4 invisible">
              &#128337; 5 Days / 4 Nights
                </p>
                <p className="text-2xl text-black-600 font-medium text-left my-2 ">
                  Starting from: 80 USD 
                </p>
              </div>
              </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="mx-auto max-w-[350px] flex flex-col justify-center items-center shadow-sm rounded-xl"
                whileHover={{
                  scale :  0.9,
                  transition: {
                    duration: .2
                  }
                }}
              >
              <div className="relative top-[-17px]">
                <Image
                  src="/assets/preview1.jpg"
                  width={350}
                  height={250}
                  
                  objectFit="cover"
                  alt="Premium Plan"
                  className="rounded-xl "
                />
              </div>
              <p className="px-4 mr-[auto] text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
              8 Days Luxor Exploration{" "}
              </p>
              <ul className="px-4 text-sm  flex flex-col text-left text-black-500 ">
                <li className="relative my-2 overflow-hidden line-clamp-6">{`
                 Embark on an unforgettable journey through the heart of ancient Egypt with our 5-day Luxor to Aswan Nile Cruise,
                 discover the timeless allure of the Nile River as you sail from Luxor, known as the "world's greatest open-air museum," to the picturesqu`}
                </li>
              </ul>
              <div className="min-w-[300px] text-sm rounded-lg min-h-[100px] p-2 bg-[#3eb9e91a] flex flex-col align-top text-left mb-8  mt-12">
                <p className=" text-black-500 mb-2  mt-4 text-left">
                🗺️ Egypt Nile Cruises, Dahabiya Nile 
                </p>
                <hr className=" border-b-0 border-white-500 opacity-[0.5] " />
                <p className=" text-black-500  mt-4 ">
              &#128337; 8 Days / 4 Nights
                </p>
                <p className="text-2xl text-black-600 font-medium text-left my-2 ">
                  Starting from: 1650 USD 
                </p>
              </div>
              </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="mx-auto max-w-[350px] text-left flex flex-col justify-center items-center shadow-sm rounded-xl"
                whileHover={{
                  scale :  0.9,
                  transition: {
                    duration: .2
                  }
                }}
              >
              <div className="relative top-[-17px]">
                <Image
                  src="/assets/preview4.jpg"
                  width={350}
                  height={250}
                  
                  objectFit="cover"
                  alt="Premium Plan"
                  className="rounded-xl "
                />
              </div>
              <p className="px-4 mr-[auto] text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
              5 Days Luxor to Aswan Nile Cruise{" "}
              </p>
              <ul className="px-4 text-sm  flex flex-col text-left text-black-500 ">
                <li className="relative my-2 overflow-hidden line-clamp-6">{`
                 Embark on an unforgettable journey through the heart of ancient Egypt with our 5-day Luxor to Aswan Nile Cruise,
                 discover the timeless allure of the Nile River as you sail from Luxor, known as the "world's greatest open-air museum," to the picturesqu`}
                </li>
              </ul>
              <div className="min-w-[300px] text-sm rounded-lg min-h-[100px] p-2 bg-[#3eb9e91a] flex flex-col align-top text-left mb-8  mt-12">
                <p className=" text-black-500 mb-2  mt-4 text-left">
                🗺️ Egypt Nile Cruises, Dahabiya Nile 
                </p>
                <hr className=" border-b-0 border-white-500 opacity-[0.5] " />
                <p className=" text-black-500  mt-4 ">
              &#128337; 5 Days / 4 Nights
                </p>
                <p className="text-2xl text-black-600 font-medium text-left my-2 ">
                  Starting from: 1200 USD 
                </p>
              </div>
              </motion.div>
            </ScrollAnimationWrapper>
          </div>
        </div>
        <div className="flex flex-col w-full my-16">
         {/*  <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed w-9/12 sm:w-6/12 lg:w-4/12 mx-auto">
             Sub Category{" "}
             <hr className="mx-auto max-w-[210px] border-b mt-4 border-sky-500  " />

            </motion.h3>
          </ScrollAnimationWrapper> */}
          {/* Tours */}
            
            
        
        </div>
      
      </div>
    </div>
  );
};

export default Pricing;
