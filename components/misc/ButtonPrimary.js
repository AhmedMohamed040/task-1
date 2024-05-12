import React from "react";

const ButtonPrimary = ({ children, addClass }) => {
  return (
    <button
      className={
        "py-1 text-sm lg:py-2 px-1 lg:px-2 text-white-500 font-thin rounded-md bg-sky-500 hover:shadow-sky-md transition-all " +
        addClass
      }
    >
      {children}
    </button>
  );
};

export default ButtonPrimary;
