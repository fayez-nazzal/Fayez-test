import React from "react";
import { useForm } from "react-hook-form";
import SectionLabel from "../components/SectionLabel";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaPaperPlane,
} from "react-icons/fa";
import InfoDiv from "../components/InfoDiv";
import { useDispatch, useSelector } from "react-redux";
import { setSection } from "../redux/viewSection";
import ViewportNode from "../components/ViewportNode";
import { bgClassFromTheme } from "../helpers/classFromTheme";

const fieldClasses =
  "border-gray-400 transition font-light duration-500 placeholder-gray-500::placeholder	 ease-in-out px-3 focus:border-custom_blue focus:outline-none border-b-2.5 block w-full  py-4 border-solid text-xl my-6";
const inputClasses = `h-16 ${fieldClasses}`;
const textAreaClasses = `h-msg ${fieldClasses}`;

const Contact = () => {
  const dispatch = useDispatch();
  const themeColor = useSelector((state) => state.theme.currentColor);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onViewportEnter = () => {
    dispatch(setSection("contact"));
  };

  const onSubmit = async () => {
    alert("contact");
    reset();
  };

  return (
    <section
      id="contact"
      className="sm:px-6 md:px-12 lg:px-16 flex flex-col items-center justify-center px-4 pt-24 pb-12 text-center"
    >
      <ViewportNode onEnterViewport={onViewportEnter} />
      <SectionLabel>Contact Me</SectionLabel>
      <h2 className="sm:mb-6 md:mb-8 lg:mb-12 z-10 mt-4 text-4xl font-bold tracking-wide text-center">
        Please send me your info in this form
      </h2>
      <div className="md:flex-row-reverse flex flex-col w-full">
        <div className="flex flex-col items-stretch w-full">
          <InfoDiv
            icon={FaMapMarkerAlt}
            title="Location"
            info="Haidian district, Beijing, 100086"
          />
          <InfoDiv
            icon={FaEnvelope}
            title="Email"
            info="jianxing.dev@gmail.com"
          />
          <InfoDiv
            icon={FaPhoneAlt}
            title="Call on me"
            info="(+86) 151 4034 5091"
          />
        </div>
        <form
          className="border-box md:mx-2 lg:mx-6 lg:grid lg:grid-cols-2 lg:gap-10 md:px-2 lg:px-4 w-full"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            id="name"
            {...register("name", { required: "Name is required" })}
            placeholder="Your Name"
            className={inputClasses}
          />
          {errors.name && <Alert text={errors.name.message} />}
          <input
            id="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email",
              },
            })}
            placeholder="Your Email"
            className={inputClasses}
          />
          {errors.email && <Alert text={errors.email.message} />}
          <input
            {...register("subject", { required: "Subject is required" })}
            placeholder="Your Subject"
            name="subject"
            id="subject"
            className={inputClasses + " md:col-span-2"}
          />
          {errors.subject && <Alert text={errors.subject.message} />}
          <textarea
            {...register("message", { required: "Message is required" })}
            placeholder="Message"
            name="message"
            className={textAreaClasses + " md:col-span-2"}
          />
          {errors.message && <Alert text={errors.message.message} />}
          <button
            className={`safe md:col-span-2 md:w-1/2 lg:w-1/3  ${bgClassFromTheme(
              themeColor
            )} focus:outline-none flex items-center justify-center px-8 py-3 text-xl text-white uppercase rounded-full`}
            type="submit"
          >
            submit
            <FaPaperPlane className="ml-2" />
          </button>
        </form>
      </div>
    </section>
  );
};

const Alert = ({ text }) => (
  <span role="alert" className="text-xl text-red-600">
    {text}
  </span>
);
export default Contact;
