import React from "react";
import { useSelector } from "react-redux";
import {
  bgClassFromTheme,
  textClassFromTheme,
} from "../helpers/classFromTheme";

const SectionLabel = (props) => {
  const themeColor = useSelector((state) => state.theme.currentColor);

  return (
    <span
      className={`safe   ${
        !props.whiteText
          ? `${bgClassFromTheme(themeColor)} ${textClassFromTheme(themeColor)}`
          : "bg-white text-white"
      } py-2 px-3 text-lg tracking-wide uppercase bg-opacity-25 rounded-md z-10`}
    >
      {props.children}
    </span>
  );
};

export default SectionLabel;
