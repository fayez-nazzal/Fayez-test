import React from "react";
import { useDispatch } from "react-redux";
import { setSection } from "../redux/viewSection";
import Li from "../components/Li";
import SectionLabel from "../components/SectionLabel";
import ViewportNode from "../components/ViewportNode";

const About = () => {
  const dispatch = useDispatch();

  const onViewportEnter = () => {
    dispatch(setSection("about"));
  };

  return (
    <section
      id="about"
      className="sm:pb-14 md:grid-rows-1 xl2:px-32 xl3:px-48 sm:pt-32 sm:px-16 sm:grid-rows-2 grid grid-cols-12 px-6 pt-20"
    >
      <div className="md:row-end-3 md:col-start-7 lg:col-start-5 col-start-1 col-end-13 row-start-1 row-end-2">
        <SectionLabel>About Me</SectionLabel>
        <ViewportNode onEnterViewport={onViewportEnter} />
        <h2 className="sm:text-3xl md:text-4xl mt-4 text-2xl font-bold">
          Senior Full-Stack Developer
        </h2>
        <p className="text-custom_grey text-md lg:text-xl xl3:text-2xl my-5 tracking-wide">
          I hope my profile explains my full-stack skills and experiences on Web
          development for more than 5 years of hands-on efficiently coding
          websites and applications using modern technologies.
        </p>
        <ul className="text-custom_grey sm:text-xl text-lg">
          <Li>React/Redux, Next, Vue, Svelte, Quasar with JS/TS</Li>
          <Li>Material-UI, Tailwind-CSS, Antd, Styled-Component</Li>
          <Li>Python/Django, DRF, Node/Express, PHP, Laravel on back-end</Li>
          <Li>Integral Roles with front-end and back-end</Li>
          <Li>Punctuality, Responsive, Pixel Perfect and Fast Learner</Li>
        </ul>
      </div>
      <img
        className="sm:col-start-2 sm:col-end-12 md:col-end-6 md:col-start-1 lg:col-end-4 md:row-start-1 md:row-end-2 w-full col-start-1 col-end-13 row-start-2 row-end-3 m-auto"
        src="https://jianxingchao.herokuapp.com/static/media/me.ccd943ea.jpg"
        alt="dev"
      />
    </section>
  );
};

export default About;
