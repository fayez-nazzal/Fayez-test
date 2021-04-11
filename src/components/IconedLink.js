import React from "react";
import { useSelector } from "react-redux";

const IconedLink = (props) => {
  const Icon = props.icon;
  const themeColor = useSelector((state) => state.theme.currentColor);

  return (
    <a
      className={`group transition-colors cursor-pointer duration-300 ease-in-out hover:bg-white inline-flex items-center justify-center w-10 h-10 mx-1 no-underline border-2 border-white rounded-full`}
      href={props.to}
    >
      <Icon
        className={`text-white  transition-colors duration-300 ease-in-out group-hover:text-${themeColor}`}
        size={20}
      />
    </a>
  );
};

export default IconedLink;
