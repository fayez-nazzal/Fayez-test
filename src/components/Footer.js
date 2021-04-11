import React from "react";
import Logo from "./Logo";
import {
  FaLinkedin,
  FaGithub,
  FaSkype,
  FaTelegram,
  FaDiscord,
  FaBlogger,
} from "react-icons/fa";
import IconedLink from "./IconedLink";
import { useSelector } from "react-redux";

const Footer = () => {
  const themeColor = useSelector((state) => state.theme.currentColor);

  return (
    <div className={`bg-${themeColor} sticky pt-20 text-center`}>
      <div className="m-auto">
        <Logo />
        <p className="py-6 text-xl text-gray-300">
          Please feel free to contact me with your convenient link below.
        </p>
        <div className="flex justify-center mb-20">
          <IconedLink
            to="https://www.linkedin.com/in/jianxing-chao-7427031ab/"
            icon={FaLinkedin}
          />
          <IconedLink href="https://github.com/panda-stack/" icon={FaGithub} />
          <IconedLink
            to="https://join.skype.com/invite/q79Ct1ZMiYCP"
            icon={FaSkype}
          />
          <IconedLink to="https://t.me/darkhorse2050/" icon={FaTelegram} />
          <IconedLink to="https://discord.gg/BhjBjFJv" icon={FaDiscord} />
          <IconedLink
            to="https://jianxing-portfolio.herokuapp.com/"
            icon={FaBlogger}
          />
        </div>
        <p className="py-3 text-xl text-gray-400 border-t border-opacity-50 border-gray-500">
          © Create by Jianxing Chao, 2020
        </p>
      </div>
    </div>
  );
};

export default Footer;
