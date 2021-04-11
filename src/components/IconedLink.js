import React from "react";
import { useSelector } from "react-redux";

const IconedLink = (props) => {
  const Icon = props.icon;
  const themeColor = useSelector((state) => state.theme.currentColor);

  return (
    <a
      className={`safe  group transition-colors cursor-pointer duration-300 ease-in-out hover:bg-white inline-flex items-center justify-center w-10 h-10 mx-1 no-underline border-2 border-white rounded-full`}
      href={props.to}
    >
      <Icon
        className={`safe  text-white  transition-colors duration-300 ease-in-out ${
          themeColor === "custom_crimson"
            ? "group-hover:text-custom_crimson"
            : themeColor === "custom_blue"
            ? "group-hover:text-custom_blue"
            : themeColor === "custom_indigo"
            ? "group-hover:text-custom_indigo"
            : themeColor === "custom_aqua"
            ? "group-hover:text-custom_aqua"
            : themeColor === "custom_black"
            ? "group-hover:text-custom_black"
            : " group-hover:text-custom_grey"
        }`}
        size={20}
      />
    </a>
  );
};

export default IconedLink;
