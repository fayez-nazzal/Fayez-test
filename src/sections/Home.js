import React from "react";
import fullStackImage from "../images/full-stack-img.png";
import ReactFloaterJs from "react-floaterjs";
import { useDispatch, useSelector } from "react-redux";
import { setSection } from "../redux/viewSection";
import { setColor, toggle as toggleThemeMenu } from "../redux/theme";
import ViewportNode from "../components/ViewportNode";
import pdf from "../files/CV.pdf";
import {
  bgClassFromTheme,
  textClassFromTheme,
} from "../helpers/classFromTheme";

const Home = () => {
  const dispatch = useDispatch();
  const themeColor = useSelector((state) => state.theme.currentColor);
  const themeMenuOpen = useSelector((state) => state.theme.menuOpen);
  const onViewportEnter = () => {
    dispatch(setSection("home"));
  };

  return (
    <section
      id="home"
      className={`safe diagonal-section ${bgClassFromTheme(
        themeColor
      )} relative py-24 sm:py-32 w-screen`}
    >
      <ViewportNode onEnterViewport={onViewportEnter} />
      <div
        className={`safe  top-20 rounded-l-md absolute right-0 z-40 p-4 pb-6 transition-all duration-500 ease-in-out transform ${
          !themeMenuOpen && "translate-x-48"
        } bg-white`}
      >
        <p className="text-lg font-medium border-b-2 border-gray-400 border-solid">
          Style Switcher
        </p>
        <div className="grid justify-around grid-cols-3 gap-1 mt-2">
          <StyleButton color="custom_crimson" />
          <StyleButton color="custom_blue" />
          <StyleButton color="custom_indigo" />
          <StyleButton color="custom_aqua" />
          <StyleButton color="custom_black" />
        </div>
      </div>
      <div className="loader-circle loader-top absolute bg-transparent" />
      <div className="loader-circle loader-bottom absolute bg-transparent" />
      <div className="absolute top-0 bottom-0 left-0 right-0 overflow-hidden">
        <div className="resize-circle absolute" />
      </div>
      <div className="loader-square absolute bg-transparent" />
      <div className="grid-rows-45 md:grid-cols-12 lg:grid-cols-6 grid grid-cols-6">
        <div className="md:col-start-4 md:col-end-10 lg:row-end-5 lg:col-start-4 lg:col-end-6 col-start-2 col-end-6 row-start-1 row-end-3">
          <ReactFloaterJs>
            <img
              className="w-full h-full m-auto"
              src={fullStackImage}
              alt="product"
            />
          </ReactFloaterJs>
        </div>
        <div className="xl2:px-6 sm:col-end-6 md:col-end-11 lg:row-start-1 lg:row-end-5 lg:col-end-4 z-40 col-start-1 col-end-7 row-start-3 row-end-5 tracking-wider">
          <h1 className=" sm:mt-0 sm:text-4xl md:text-5xl w-5/6 mx-auto mt-2 text-2xl font-bold text-white">
            Senior full-stack Developer
          </h1>
          <p className="border-box xl2:text-2xl xl3:text-3xl sm:text-xl w-5/6 mx-auto mt-3 text-lg text-left text-white">
            {`As I'm a senior full-stack Web Developer with over 5 years of
            experience, if you have the idea then I will make sure it's
            implemented perfectly. My primary skill set includes React/Redux,
            Next and Vue with JS/TS and Node/Express, Python/Django, DRF. I have
            a strong expertise in Software development life cycle from modeling
            to deployment.`}
          </p>
          <div className="w-4/5 mx-auto mt-12">
            <a
              className={`safe  ${textClassFromTheme(
                themeColor
              )} px-8 py-3 text-lg sm:text-xl xl:text-2xl font-semibold xl2:text-2xl xl3:text-3xl bg-white rounded-full`}
              href={pdf}
              target="_blank"
              rel="noreferrer"
            >
              DOWNLOAD CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const StyleButton = (props) => {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(setColor(props.color));
    dispatch(toggleThemeMenu());
  };

  return (
    <div
      onClick={onClick}
      className={`safe  w-8 h-8 cursor-pointer rounded-full bg-${props.color}`}
    ></div>
  );
};

export default Home;
