import React, { useState, useEffect } from "react";
import Link from "next/link";
// Import react scroll
import Facebook from "../../public/assets/Icon/facebook.svg";
import Twitter from "../../public/assets/Icon/twitter.svg";
import Search from "../../public/assets/Icon/search.svg";

import { Link as LinkScroll } from "react-scroll";
import ButtonPrimary from "../misc/ButtonPrimary";
import Logo from "../../public/assets/Logo.svg";

const Header = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [scrollActive, setScrollActive] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);
  return (
    <>
      <header
       
        className={
          "duration-500  fixed top-0 w-full z-30 transition-all " +
          (scrollActive ? "shadow-md pt-0 bg-sky-500" : "shadow bg-transparent ")
        }
      >
        <nav className={"items-center py-2 max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto justify-between  flex-row hidden lg:flex " +  (scrollActive ? " hidden" : "")} >
          <ul className="text-white-500 items-center text-sm justify-between flex-row flex gap-4">
            <li className="cursor-pointer pr-1">
            <Facebook className="h-6 w-6 transition-all hover:scale-75" />
            </li>|
            <li className="cursor-pointer pr-1">
            <Twitter className="h-6 w-6 transition-all hover:scale-75" />
            </li>|
            <li className="text-white-500 text-sm ">123456789</li>|
            <li className="text-white-500 text-sm">info@eg-vacation.com</li>
          </ul>
          <ul className="text-white-500 items-center text-sm justify-between flex-row flex gap-4 ">
            <li className="cursor-pointer text-sm text-white-300 pr-1  ">blog</li>|
            <li className="cursor-pointer text-sm text-white-300 pr-1  ">ContentUs</li>|
            <li className="cursor-pointer text-sm text-white-300 pr-1  ">English &#160; <i className="rotate-45 arrow right"></i></li>|
            <li className="cursor-pointer text-sm text-white-300 pr-1">$ USD &#160; <i className="rotate-45 arrow right"></i></li>
          </ul>
        </nav>
        <hr className="border-b-0 border-white-500 opacity-[0.3]" />
        <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4 " >
          <div className="col-start-1 col-end-2 flex items-center max-w-[150px] max-h-[40px]">
            <Logo />
          </div>
          <ul className="hidden lg:flex col-start-4 col-end-8 text-sky-500  items-center">
            <LinkScroll
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("home");
              }}
              className={
                "text-white-500 font-thin text-xs xl:text-sm px-4 py-2 mx-2  cursor-pointer animation-hover inline-block relative" +
                (activeLink === "home"
                  ? " text-white-500 animation-active "
                  : "")
              }
            >
              Home
            </LinkScroll>
            <LinkScroll
              activeClass="travel"
              to="travel"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("travel");
              }}
              className={
                "text-white-500 font-thin text-xs xl:text-sm px-4 py-2 mx-2  cursor-pointer animation-hover inline-block relative" +
                (activeLink === "travel"
                  ? " text-white-500 animation-active "
                  : " text-sky-500 hover:text-white-500 ")
              }
            >
              Egypt Travel &#160; <i className="rotate-45 arrow right"></i>
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="trous"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("trous");
              }}
              className={
                "text-white-500 font-thin text-xs xl:text-sm px-4 py-2 mx-2  cursor-pointer animation-hover inline-block relative" +
                (activeLink === "trous"
                  ? " text-white-500 animation-active "
                  : " text-sky-500 hover:text-white-500 ")
              }
            >
              Egypt Day Tours  &#160; <i className="rotate-45 arrow right"></i>
            </LinkScroll>
            <LinkScroll
              activeClass="cruisses"
              to="cruisses"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("cruisses");
              }}
              className={
                "text-white-500 font-thin text-xs xl:text-sm px-4 py-2 mx-2  cursor-pointer animation-hover inline-block relative" +
                (activeLink === "cruisses"
                  ? " text-white-500 animation-active "
                  : " text-sky-500 hover:text-white-500 ")
              }
            >
              Egypt Nile Cruisses &#160; <i className="rotate-45 arrow right"></i>
            </LinkScroll>
            <LinkScroll
              activeClass="why"
              to="why"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("why");
              }}
              className={
                "text-white-500 font-thin text-xs xl:text-sm px-4 py-2 mx-2  cursor-pointer animation-hover inline-block relative" +
                (activeLink === "why"
                  ? " text-white-500 animation-active "
                  : " text-sky-500 hover:text-white-500 ")
              }
            >
               Why Us?
            </LinkScroll>
          </ul>
          <div className="col-start-10 col-end-12 flex justify-end items-center gap-8">
            <i href="/">
            <Search className="transition-all cursor-pointer hover:scale-75 text-white-500" />
           </i>
            <ButtonPrimary className="border-1" addClass={ (scrollActive ? "border border-white-500" : "")} >Tailor Made</ButtonPrimary>
          </div>
        </nav>
       
      </header>
      {/* Mobile Navigation */}

      <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-20 px-4 sm:px-8 shadow-t ">
        <div className="bg-white-500 sm:px-3">
          <ul className="flex w-full justify-between items-center text-sky-500">
            <LinkScroll
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("home");
              }}
              className={
                "text-sky-500 -1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                (activeLink === "home"
                  ? "  border-sky-100 text-sky-500"
                  : " border-transparent")
              }
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Home
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="feature"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("feature");
              }}
              className={
                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                (activeLink === "feature"
                  ? "  border-sky-100 text-sky-500"
                  : " border-transparent ")
              }
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                />
              </svg>
              Egypt Travel  <i className="rotate-45 arrow right"></i>
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="pricing"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("pricing");
              }}
              className={
                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                (activeLink === "pricing"
                  ? "  border-sky-100 text-sky-500"
                  : " border-transparent ")
              }
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              الباقات
            </LinkScroll>
            <LinkScroll
              tiveClass="active"
              to="testimoni"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("testimoni");
              }}
              className={
                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                (activeLink === "testimoni"
                  ? "  border-sky-100 text-sky-500"
                  : " border-transparent ")
              }
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              راي المستخدمين
            </LinkScroll>
          </ul>
        </div>
      </nav>
      {/* End Mobile Navigation */}
    </>
  );
};

export default Header;
