import React from "react";
import { useSelector } from "react-redux";

const SectionLabel = (props) => {
  const themeColor = useSelector((state) => state.theme.currentColor);

  return (
    <span
      className={`safe   ${
        !props.whiteText
          ? `${
              themeColor === "custom_crimson"
                ? "bg-custom_crimson"
                : themeColor === "custom_blue"
                ? "bg-custom_blue"
                : themeColor === "custom_indigo"
                ? "bg-custom_indigo"
                : themeColor === "custom_aqua"
                ? "bg-custom_aqua"
                : themeColor === "custom_black"
                ? "bg-custom_black"
                : " bg-custom_grey"
            } ${
              themeColor === "custom_crimson"
                ? "text-custom_crimson"
                : themeColor === "custom_blue"
                ? "text-custom_blue"
                : themeColor === "custom_indigo"
                ? "text-custom_indigo"
                : themeColor === "custom_aqua"
                ? "text-custom_aqua"
                : themeColor === "custom_black"
                ? "text-custom_black"
                : " text-custom_grey"
            }`
          : "bg-white text-white"
      } py-2 px-3 text-lg tracking-wide uppercase bg-opacity-25 rounded-md z-10`}
    >
      {props.children}
    </span>
  );
};

export default SectionLabel;
