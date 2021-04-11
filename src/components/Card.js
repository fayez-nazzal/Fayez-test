import React from "react";
import { useSelector } from "react-redux";

const Card = (props) => {
  const themeColor = useSelector((state) => state.theme.currentColor);
  const Icon = props.icon;

  return (
    <div
      className={`group color-white ${
        themeColor === "hover:custom_crimson"
          ? "hover:bg-custom_crimson"
          : themeColor === "custom_blue"
          ? "hover:bg-custom_blue"
          : themeColor === "custom_indigo"
          ? "hover:bg-custom_indigo"
          : themeColor === "custom_aqua"
          ? "hover:bg-custom_aqua"
          : themeColor === "custom_black"
          ? "hover:bg-custom_black"
          : " hover:bg-custom_grey"
      } hover:-translate-y-4 flex flex-col items-center justify-around p-6 pb-12 my-10 transition duration-500 ease-in-out transform bg-white rounded-md shadow-md`}
    >
      <Icon
        size={42}
        className={`${
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
        } group-hover:text-white my-4 transition duration-500 ease-in-out`}
      />
      <h3 className="group-hover:text-white my-2 text-3xl font-semibold text-gray-800 transition duration-500 ease-in-out">
        {props.title}
      </h3>
      <p className="text-custom_grey group-hover:text-white text-xl text-center transition duration-500 ease-in-out">
        {props.children}
      </p>
    </div>
  );
};

export default Card;
