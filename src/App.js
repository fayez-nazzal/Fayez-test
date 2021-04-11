import React from "react";
import Home from "./sections/Home";
import About from "./sections/About";
import Navbar from "./components/Navbar";
import "./App.css";
import Services from "./sections/Services";
import Portfolios from "./sections/Portfolios";
import Testimonial from "./sections/Testimonial";
import Contact from "./sections/Contact";
import "swiper/swiper.scss";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Portfolios />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
