import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggle as toggleNavMenu } from "../redux/navOpen";
import { toggle as toggleThemeMenu } from "../redux/theme";

import { BsList } from "react-icons/bs";
import Link from "./HashLink";
import { HashLink as RawHashLink } from "react-router-hash-link";
import Logo from "./Logo";
import { FaCog } from "react-icons/fa";

const Navbar = () => {
  const navOpen = useSelector((state) => state.navOpen.value);
  const dispatch = useDispatch();
  const themeColor = useSelector((state) => state.theme.currentColor);

  const onMenuButtonClick = () => {
    dispatch(toggleNavMenu());
  };

  const onCogButtonClicke = () => {
    dispatch(toggleNavMenu());
    dispatch(toggleThemeMenu());
  };

  return (
    <nav
      className={`safe  navbar border-box ${
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
      } truncate overflow-visible fixed top-0 left-0 right-0 z-50 flex flex-wrap items-center justify-center transition-all duration-300 ease-in-out bg-opacity-75 border-b-2 border-opacity-50 border-white`}
    >
      <div className="flex items-center w-4/5 h-20">
        <Logo />
        <button
          onClick={onMenuButtonClick}
          className="focus:outline-none px-2 pt-2 pb-1 ml-auto bg-white rounded-md"
        >
          <BsList
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
            }`}
            size={32}
          />
        </button>
      </div>
      <div
        className={`safe  ${
          !navOpen ? "h-0" : "h-nav_menu"
        } px-4 font-medium transition-all duration-300 ease-in ${
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
        } truncate flex flex-col w-4/5 mx-auto text-xl bg-white`}
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
