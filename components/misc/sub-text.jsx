import React from "react";

const SubText = ({ children }) => {
  return (
    <div>
        <h6 className="text-">{children}</h6>
        <p className="text-center text-sm font-light">{children}</p>
    </div>
  );
};

export default SubText;
