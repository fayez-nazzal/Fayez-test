import React from "react";
import { FaDev } from "react-icons/fa";
import { useBreakpoints } from "react-breakpoints-hook";

const Logo = () => {
  let { sm } = useBreakpoints({
    sm: { min: 768, max: null },
  });
  return (
    <span className=" sm:text-4xl inline-flex items-center text-2xl font-bold text-white">
      <FaDev className="mr-2" size={sm ? 32 : 30} />
      JIANXING CHAO
    </span>
  );
};

export default Logo;
