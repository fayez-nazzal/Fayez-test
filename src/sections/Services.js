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
      className="relative top-0 left-0 flex flex-col items-center justify-center py-32 overflow-auto"
    >
      <SectionLabel>Services</SectionLabel>
      <h2 className="mb-12 text-4xl font-bold tracking-wide">
        Here are my expertises
      </h2>
      <ViewportNode onEnterViewport={onViewportEnter} />
      <div className="text-custom_grey md:grid-rows-3 lg:grid-rows-2 grid self-stretch grid-cols-6 gap-8 px-16">
        <div className="md:col-end-4 lg:col-end-3 col-start-1 col-end-7">
          <Card icon={FaDeaf} title="Innovative Ideas">
            Innovative Ideas are the most important things in web development.
          </Card>
        </div>
        <div className="md:col-start-4 lg:col-start-3 lg:col-end-5 col-start-1 col-end-7">
          <Card icon={FaUsers} title="Team Work">
            Teamwork spirit and cooperation together should be more helpful to
            be success.
          </Card>
        </div>
        <div className="md:col-end-4 lg:col-start-5 lg:col-end-7 col-start-1 col-end-7">
          <Card icon={FaCalendar} title="Punctuality">
            {`Punctuality is one of my Advantages, it's very important in all
          contracts.`}
          </Card>
        </div>
        <div className="md:col-start-4 lg:col-end-3 lg:col-start-1 col-start-1 col-end-7">
          <Card icon={FaCogs} title="Responsiveness">
            My all projects are responsive for Desktop/Mobile application.
          </Card>
        </div>
        <div className="md:col-end-4 lg:col-start-3 lg:col-end-5 col-start-1 col-end-7">
          <Card icon={FaEye} title="Pixel Perfect">
            Once the design is provided, the project will be completed as pixel
            perfectly.
          </Card>
        </div>

        <div className="md:col-start-4 lg:col-start-5 lg:col-end-7 col-start-1 col-end-7">
          <Card icon={FaFighterJet} title="Fast Learner">
            {`For the latest tech, I'm always trying to learn new and challengeable
          aspect.`}
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;
