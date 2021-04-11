import React from "react";

const PortfolioCard = (props) => {
  return (
    <div className="h-158 max-h-158 min-h-158 border-box z-10 m-2 shadow-md">
      <img className="" src={props.imgSrc} alt={props.title} />
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
