import React from "react";
import { useSelector } from "react-redux";

const InfoDiv = (props) => {
  const Icon = props.icon;
  const themeColor = useSelector((state) => state.theme.currentColor);

  return (
    <div className="jusify-start flex items-center my-4">
      <Icon
        className={`safe  ${
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
        } mr-4`}
        size={28}
      />
      <div className="inline-flex flex-col self-stretch text-left">
        <h5
          className={`safe  "${
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
          } text-xl tracking-wide"`}
        >
          {props.title}
        </h5>
        <p className="text-custom_grey text-xl">{props.info}</p>
      </div>
    </div>
  );
};

export default InfoDiv;
