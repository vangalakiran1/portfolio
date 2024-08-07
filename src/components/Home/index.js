import React, { useEffect, Suspense, lazy } from "react";
import reactImg from "../images/react.png";
import htmlImg from "../images/html.png";
import cssImg from "../images/css.png";
import jsImg from "../images/js.png";
import AOS from "aos";
import "aos/dist/aos.css";
import "./index.css";

// const personImg = lazy(() => import("../images/img1.jpg"));
import personImg from "../images/img1.jpg";
export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="home-container" id="home">
      <div data-aos="fade-down" className="home-text">
        <div className="home-text-inner">
          <h1 className="main-heading">
            I'm Kiran kumar <br /> Fullstack Developer
          </h1>
          <p className="sub-heading">
            Passionate Frontend Developer | Tranforming ideas into Seamless and
            Visually Stunnting Web Solutions.
          </p>
          <button className="custom-resume-btn">Download CV</button>
        </div>
      </div>
      <div className="home-img" data-aos="fade-down">
        {/* <Suspense fallback={<p>...loading</p>}> */}
        <img className="person-img" src={personImg} />
        {/* </Suspense> */}
        <div className="language-logos-container">
          <img
            className="language-logo"
            data-aos="fade-right"
            data-aos-delay="500"
            data-aos-offset="-200"
            data-aos-anchor-placement="center-center"
            src={reactImg}
          />
          <img
            className="language-logo"
            data-aos="fade-right"
            data-aos-delay="500"
            data-aos-offset="-200"
            data-aos-anchor-placement="center-center"
            src={htmlImg}
          />
          <img
            className="language-logo"
            data-aos="fade-left"
            data-aos-delay="500"
            data-aos-offset="-200"
            data-aos-anchor-placement="center-center"
            src={cssImg}
          />
          <img
            className="language-logo"
            data-aos="fade-left"
            data-aos-delay="500"
            data-aos-offset="-200"
            data-aos-anchor-placement="center-center"
            src={jsImg}
          />
        </div>
      </div>
    </div>
  );
}
