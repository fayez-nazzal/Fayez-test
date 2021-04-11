import React from "react";
import { useSelector } from "react-redux";

const InfoDiv = (props) => {
  const Icon = props.icon;
  const themeColor = useSelector((state) => state.theme.currentColor);

  return (
    <div className="jusify-start flex items-center my-4">
      <Icon className={`text-${themeColor} mr-4`} size={28} />
      <div className="inline-flex flex-col self-stretch text-left">
        <h5 className={`"text-${themeColor} text-xl tracking-wide"`}>
          {props.title}
        </h5>
        <p className="text-custom_grey text-xl">{props.info}</p>
      </div>
    </div>
  );
};

export default InfoDiv;
