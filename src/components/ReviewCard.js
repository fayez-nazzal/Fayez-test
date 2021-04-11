import React from "react";
import { FaQuoteLeft, FaQuoteRight, FaStar, FaEnvelope } from "react-icons/fa";

const ReviewCard = (props) => {
  return (
    <div className="z-10 h-full p-4 m-2 bg-white rounded-lg shadow-md">
      <div className="px-6">
        <p className="text-custom_grey text-xl italic tracking-wide">
          <FaQuoteLeft
            className="inline-block mr-3"
            size={18}
            color="#555555"
          />
          {props.children}
          <FaQuoteRight
            className="inline-block ml-3"
            size={18}
            color="#555555"
          />
        </p>
        <div className="flex my-4">
          {[...new Array(5).keys()].map((elem) => (
            <Star key={elem} />
          ))}
        </div>
        <div className="flex">
          <img
            className="border-custom_blue w-16 h-16 mr-4 border-2 rounded-full"
            src={props.imgSrc}
            alt={props.from}
          />
          <div className="flex flex-col justify-around">
            <h5 className="text-custom_blue text-xl font-semibold text-left">
              {props.from}
            </h5>
            <p className="text-custom_grey text-lg">
              <FaEnvelope className="inline-block mr-2" color="#666666" />
              {props.email}
            </p>
          </div>
        </div>
        <div className="px-6 my-4 text-left">
          <a
            className="hover:text-blue-600 text-xl tracking-wide text-blue-500"
            href={props.link}
          >
            {props.linkText}
          </a>
        </div>
      </div>
    </div>
  );
};

const Star = () => {
  return <FaStar size={18} color="#ff9800" />;
};

export default ReviewCard;
