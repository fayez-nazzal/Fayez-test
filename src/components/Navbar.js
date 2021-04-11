import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggle as toggleNavMenu } from "../redux/navOpen";
import { toggle as toggleThemeMenu } from "../redux/theme";
import { useBreakpoints } from "react-breakpoints-hook";

import { BsList } from "react-icons/bs";
import Link from "./HashLink";
import { HashLink as RawHashLink } from "react-router-hash-link";
import Logo from "./Logo";
import { FaCog } from "react-icons/fa";
import {
  bgClassFromTheme,
  textClassFromTheme,
} from "../helpers/classFromTheme";

const Navbar = () => {
  const navOpen = useSelector((state) => state.navOpen.value);
  const dispatch = useDispatch();
  const themeColor = useSelector((state) => state.theme.currentColor);
  let { lg } = useBreakpoints({
    xs: { min: 0, max: null },
    sm: { min: 640, max: null },
    md: { min: 768, max: null },
    lg: { min: 1280, max: null },
  });

  const onMenuButtonClick = () => {
    dispatch(toggleNavMenu());
  };

  const onCogButtonClicke = () => {
    dispatch(toggleNavMenu());
    dispatch(toggleThemeMenu());
  };

  return (
    <nav
      className={`safe navbar border-box ${bgClassFromTheme(
        themeColor
      )} truncate overflow-visible fixed top-0 left-0 right-0 z-50 flex ${
        !lg && "flex-wrap"
      } items-center justify-center lg:justify-around transition-all duration-300 ease-in-out bg-opacity-75 lg:px-4 border-b-2 border-opacity-50 border-white`}
    >
      <div className="lg:ml-12 flex items-center w-4/5 h-20">
        <Logo />
        <button
          onClick={onMenuButtonClick}
          className="lg:hidden focus:outline-none px-2 pt-2 pb-1 ml-auto bg-white rounded-md"
        >
          <BsList
            className={`safe  ${textClassFromTheme(themeColor)}`}
            size={32}
          />
        </button>
      </div>
      <div
        className={`safe  ${
          !lg && (!navOpen ? "h-0" : "h-nav_menu")
        } px-4 font-medium transition-all duration-300 lg:justify-around ease-in ${
          lg ? "text-white" : textClassFromTheme(themeColor)
        } truncate flex ${
          !lg && "flex-col"
        } w-4/5 lg:w-full mx-auto lg:mr-12 text-xl ${
          !lg && "bg-white"
        } lg:items-center`}
      >
        <Link to="/#home" name="Home" />
        <Link to="/#about" name="About" />
        <Link to="/#services" name="Services" />
        <Link to="/#portfolios" name="Portfolios" />
        <Link to="/#testimonial" name="Testimonial" />
        <Link to="/#contact" name="Contact" />
        <RawHashLink to="/#home" smooth>
          <button
            onClick={onCogButtonClicke}
            className=" focus:outline-none my-2 cursor-pointer"
          >
            <FaCog />
          </button>
        </RawHashLink>
      </div>
    </nav>
  );
};

export default Navbar;
