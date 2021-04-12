import React, { useState } from "react";
import { useSelector } from "react-redux";
import { textClassFromTheme } from "../helpers/classFromTheme";

const PortfolioCard = (props) => {
  const [groupHover, setGroupHover] = useState(false);
  const themeColor = useSelector((state) => state.theme.currentColor);

  return (
    <div
      onMouseEnter={() => setGroupHover(true)}
      onMouseLeave={() => setGroupHover(false)}
      className="portfolio border-box group z-40 grid grid-rows-2 shadow-md"
    >
      <div
        className={`${
          groupHover && "shadow-inset"
        } w-full transition-all duration-300 ease-in-out flex items-center justify-center`}
        style={{
          backgroundImage: `url("${props.imgSrc}")`,
          backgroundSize: "cover",
        }}
        alt={props.title}
      >
        <a
          href={props.to}
          className={`transform ${
            !groupHover && "translate-y-32 opacity-0"
          } bg-white rounded-full ${textClassFromTheme(
            themeColor
          )} text-2xl font-medium no-underline px-6 py-3 transition-all duration-500 ease-in-out`}
          style={{
            opacity: 0.9,
          }}
        >
          GO TO LINK
        </a>
      </div>
      <div className="px-8">
        <div className="text-center">
          <h3 className="hover:text-blue-700 inline-block mt-3 text-xl font-bold text-blue-600">
            <a href={props.to}>{props.title}</a>
          </h3>
          <h4 className="inline-block ml-2 text-gray-600">({props.date})</h4>
        </div>
        <h5 className="text-custom_grey mt-2">{props.children}</h5>
      </div>
    </div>
  );
};

export default PortfolioCard;
