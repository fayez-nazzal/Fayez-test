import React from "react";
import { FaCheck } from "react-icons/fa";

const Li = ({ children }) => {
  return (
    <li className="flex my-4">
      <FaCheck className="mr-2" color="#4948d4" size={22} />
      {children}
    </li>
  );
};

export default Li;
