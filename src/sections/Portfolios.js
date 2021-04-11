import React, { useState } from "react";
import SectionLabel from "../components/SectionLabel";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import PortfolioCard from "../components/PortfolioCard";
import wwt from "../images/wwt.jpg";
import racing from "../images/racing.jpg";
import msg from "../images/msg.jpg";
import landing from "../images/landing.png";
import responsive from "../images/responsive.jpg";
import frozenTest from "../images/frozenTest.jpg";
import reactScss from "../images/reactScss.jpg";
import ecommerce from "../images/ecommerce.jpg";
import canvas from "../images/canvas.jpg";
import { useDispatch } from "react-redux";
import { setSection } from "../redux/viewSection";
import ViewportNode from "../components/ViewportNode";
import SwiperButtons from "../components/SwiperButtons";
import { useBreakpoints } from "react-breakpoints-hook";

SwiperCore.use([Autoplay]);

const Portfolios = () => {
  const dispatch = useDispatch();
  const [swiper, setSwiper] = useState(null);
  let { lg } = useBreakpoints({
    lg: { min: 1280, max: null },
  });

  const onViewportEnter = () => {
    dispatch(setSection("portfolios"));
  };

  return (
    <section
      id="portfolios"
      className="flex flex-col items-center justify-center px-16 text-center"
    >
      <ViewportNode onEnterViewport={onViewportEnter} />
      <SectionLabel>Portfolios</SectionLabel>
      <h2 className="mx-8 mb-12 text-4xl font-bold tracking-wide text-center">
        Here are my representative projects
      </h2>
      <div className="border-box lg:px-32 w-screen px-16">
        <Swiper
          slidesPerView={lg ? 2 : 1}
          spaceBetween={32}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          speed={900}
          loop={true}
          onInit={(swiper) => setSwiper(swiper)}
          grabCursor
        >
          <SwiperSlide>
            <PortfolioCard
              imgSrc={wwt}
              date="2020.9-2020.11"
              title="WWT-Work Well Together"
              to="https://dev.workwelltogether.co/"
            >
              {`This site is a questionnaire platform to check the users' features,
            and the ability of team work of any two users. In this project, I
            have built several endpoints using Django rest framework, and have
            used postgresql for database. I have added the function of login
            with social accounts(google, linkedin, facebook), and used number of
            modules in frontend.`}
            </PortfolioCard>
          </SwiperSlide>
          <SwiperSlide>
            <PortfolioCard
              imgSrc={racing}
              date="2017.5-2017.11"
              title="Online Horse Racing Management"
              to="https://theracingmanager.com/"
            >
              This is a web application for horse racing management and the
              users can benefit from this application without attending at the
              real racing but online. As a full-stack developer, my role in this
              project was to build the endpoints using Node.js/Express combined
              with MongoDB and integrated the 3rd party API to fetch the local
              racing data and visualize them in the front end.For front-end, I
              used React/Redux and Material UI, of course customized the
              provided UI.
            </PortfolioCard>
          </SwiperSlide>
          <SwiperSlide>
            <PortfolioCard
              imgSrc={msg}
              date="2019.10-2019.11"
              title="MSGsafe"
              to="https://www.msgsafe.io/"
            >
              This is a mobile app that allows you to safely send and receive
              messages and emails between two users. Customers can do private,
              end-to-end encrypted, online communication throuth this app. This
              app protect your privacy and security.
            </PortfolioCard>
          </SwiperSlide>
          <SwiperSlide>
            <PortfolioCard
              imgSrc={frozenTest}
              date="2020.3-2020.3"
              title="React-frozen Converter"
              to="https://frozen-tor-81335.herokuapp.com/"
            >
              It was based on figma Design file and it was only for the test app
              in recent. Created only the first landing page.
            </PortfolioCard>
          </SwiperSlide>
          <SwiperSlide>
            <PortfolioCard
              imgSrc={responsive}
              date="2020.5-2020.6"
              title="React Responsive page"
              to="https://react-responsive.herokuapp.com/"
            >
              {`It's the React-responsive Desktop/Mobile test-page to show
              profile, only the test-frontend page. It was based on Figma
              design.`}
            </PortfolioCard>
          </SwiperSlide>
          <SwiperSlide>
            <PortfolioCard
              imgSrc={landing}
              date="2020.10-2020.11"
              title="Production Landing Page"
              to="https://prod-land.herokuapp.com/"
            >
              Production Landing Page was built based on React,
              styled-component, framer-motion basically from 2020.10 ~ 2020.11
              by me. This kind of website should be used for Blog page,
              production store website, or shoping page, etc.
            </PortfolioCard>
          </SwiperSlide>
          <SwiperSlide>
            <PortfolioCard
              imgSrc={canvas}
              date="2020.1-2020.3"
              title="Canvas-Mascular Animation"
              to="https://canvas-animation-muscular.herokuapp.com/"
            >
              {`It's HTML5/Canvas and Images based muscular animation project with
              Audio. I have built several animation projects with HTML5, Canvas,
              and CSS3. For more good understand, please click mouse in the
              page, then you should see that the muscular flows blood, and in
              that position, flower should be grown, ball should be rotated...
              There are so many animations respectively.`}
            </PortfolioCard>
          </SwiperSlide>
          <SwiperSlide>
            <PortfolioCard
              imgSrc={ecommerce}
              date="2019.11-2020.7"
              title="eCommerce B2C website"
              to="https://image3d.com/"
            >
              This is a multistore ecommerce B2C website built with Magento.
              Customers can reserve, order, and purchase products through this
              site. I have worked to customize the Avatax module, Instagram
              module, and so on for back-end. And I have worked to customize the
              styles with css and less files for front-end.
            </PortfolioCard>
          </SwiperSlide>
          <SwiperSlide>
            <PortfolioCard
              imgSrc={reactScss}
              date="2019.3-2019.10"
              title="ReactJS with SCSS"
              to="https://transl-eat.web.app/"
            >
              React is a declarative, efficient, and flexible JavaScript library
              for building user interfaces. It lets me compose complex UIs from
              small and isolated pieces of code called “components”. I have
              studied ReactJS over 6 years to become an excellent front-end
              developer and with my skills, have developed this biggest project,
              transl-eat app as responsive with SCSS a year ago.
            </PortfolioCard>
          </SwiperSlide>
        </Swiper>
        <SwiperButtons swiper={swiper} />
      </div>
    </section>
  );
};

export default Portfolios;
