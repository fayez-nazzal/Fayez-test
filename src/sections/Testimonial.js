import React, { useState } from "react";
import SectionLabel from "../components/SectionLabel";
import SwiperCore, { Autoplay } from "swiper";
import ReviewCard from "../components/ReviewCard";
import { Swiper, SwiperSlide } from "swiper/react";
import angelo from "../images/angelo.jpg";
import { useDispatch, useSelector } from "react-redux";
import { setSection } from "../redux/viewSection";
import ViewportNode from "../components/ViewportNode";
import SwiperButtons from "../components/SwiperButtons";

SwiperCore.use([Autoplay]);

const Testimonial = () => {
  const dispatch = useDispatch();
  const themeColor = useSelector((state) => state.theme.currentColor);
  const [swiper, setSwiper] = useState(null);

  const onViewportEnter = () => {
    dispatch(setSection("testimonial"));
  };

  return (
    <section
      id="testimonial"
      className={`safe  testimonial ${
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
      } flex flex-col items-center justify-center px-16 pt-16 pb-12 text-center`}
    >
      <ViewportNode onEnterViewport={onViewportEnter} />
      <SectionLabel whiteText>TESTIMONIAL</SectionLabel>
      <h2 className="z-10 mt-4 mb-12 text-4xl font-bold tracking-wide text-center text-white">
        My Satisfied Clients Feedback
      </h2>
      <div className="border-box w-screen px-16">
        <Swiper
          slidesPerView={1}
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
            <ReviewCard
              imgSrc={angelo}
              from="Angelo Plessas"
              email="angeloplessas@gmail.com"
              link="https://angeloplessas.com/"
              linkText="Talismania, Deste Prize, Museum of Cycladic Art"
            >
              Appreciate the great work delivered by Jin for my many projects!
              He had been very supportive throughout the project and was always
              available to resolve all the queries and doubts for Talismania,
              Deste Prize, Museum of Cycladic Art Project. He had done greatest
              Artist Project such as Canvas-Musculsar Project.
            </ReviewCard>
          </SwiperSlide>
          <SwiperSlide>
            <ReviewCard
              imgSrc="data:image/jpeg;base64,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"
              from="Frank Bracq"
              email="fbracq@eventstory.live"
              link="https://eventstory.live/"
              linkText="EventStory.live ( KoT SAS Company, Paris )"
            >
              {`I’ve worked closely with Jianxing for almost 2 years and feel
              fully confident in expressing my endorsement. As a React front-end
              developer in our company, he completed his assignments quickly and
              perfectly and always provided insight for a better solution. I
              highly recommend him for any of your React projects.`}
            </ReviewCard>
          </SwiperSlide>
        </Swiper>
        <SwiperButtons reverseColors swiper={swiper} />
      </div>
    </section>
  );
};

export default Testimonial;
