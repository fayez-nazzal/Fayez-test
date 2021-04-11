import React from "react";
import SectionLabel from "../components/SectionLabel";
import {
  FaDeaf,
  FaUsers,
  FaCalendar,
  FaCogs,
  FaEye,
  FaFighterJet,
} from "react-icons/fa";
import Card from "../components/Card";
import { useDispatch } from "react-redux";
import { setSection } from "../redux/viewSection";
import ViewportNode from "../components/ViewportNode";

const Services = () => {
  const dispatch = useDispatch();

  const onViewportEnter = () => {
    dispatch(setSection("services"));
  };

  return (
    <section
      id="services"
      className="relative top-0 left-0 flex flex-col items-center justify-center px-16 py-32 overflow-auto"
    >
      <ViewportNode onEnterViewport={onViewportEnter} />
      <SectionLabel>Services</SectionLabel>
      <h2 className="mb-12 text-4xl font-bold tracking-wide">
        Here are my expertises
      </h2>
      <div className="text-custom_grey self-stretch px-16">
        <Card icon={FaDeaf} title="Innovative Ideas">
          Innovative Ideas are the most important things in web development.
        </Card>
        <Card icon={FaUsers} title="Team Work">
          Teamwork spirit and cooperation together should be more helpful to be
          success.
        </Card>
        <Card icon={FaCalendar} title="Punctuality">
          {`Punctuality is one of my Advantages, it's very important in all
          contracts.`}
        </Card>
        <Card icon={FaCogs} title="Responsiveness">
          My all projects are responsive for Desktop/Mobile application.
        </Card>
        <Card icon={FaEye} title="Pixel Perfect">
          Once the design is provided, the project will be completed as pixel
          perfectly.
        </Card>
        <Card icon={FaFighterJet} title="Fast Learner">
          {`For the latest tech, I'm always trying to learn new and challengeable
          aspect.`}
        </Card>
      </div>
    </section>
  );
};

export default Services;
