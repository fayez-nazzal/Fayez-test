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
      className="pb-14 flex flex-col items-start justify-center px-16 pt-32"
    >
      <ViewportNode onEnterViewport={onViewportEnter} />
      <SectionLabel className="">About Me</SectionLabel>
      <h2 className="text-4xl font-bold">Senior Full-Stack Developer</h2>
      <p className="text-custom_grey my-5 text-lg tracking-wide">
        I hope my profile explains my full-stack skills and experiences on Web
        development for more than 5 years of hands-on efficiently coding
        websites and applications using modern technologies.
      </p>
      <ul className="text-custom_grey text-xl">
        <Li>React/Redux, Next, Vue, Svelte, Quasar with JS/TS</Li>
        <Li>Material-UI, Tailwind-CSS, Antd, Styled-Component</Li>
        <Li>Python/Django, DRF, Node/Express, PHP, Laravel on back-end</Li>
        <Li>Integral Roles with front-end and back-end</Li>
        <Li>Punctuality, Responsive, Pixel Perfect and Fast Learner</Li>
      </ul>
      <img
        className="w-3/5 mx-auto"
        src="https://jianxingchao.herokuapp.com/static/media/me.ccd943ea.jpg"
        alt="dev"
      />
    </section>
  );
};

export default About;
