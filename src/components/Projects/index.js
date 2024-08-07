import React, { useEffect } from "react";
import commingSoon from "../images/commingSoon.png";
import weatherApp from "../images/weatherApp.png";
import todoApp from "../images/todo-app1.png";
import "./index.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Projects() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="projects-container" id="projects">
      <div>
        <h2>Works</h2>
        <div className="work-box">
          <div className="work" data-aos="fade-up">
            <a href="https://kiran-weather-app.netlify.app/" target="_blank">
              <img src={weatherApp} alt="img" />
            </a>
          </div>
          <div className="work" data-aos="fade-up">
            <a
              href="https://todo-app-frontend-rust-five.vercel.app/"
              target="_blank"
            >
              <img src={todoApp} alt="img" />
            </a>
          </div>
          <div className="work" data-aos="fade-up">
            <a href="https://kiran-weather-app.netlify.app/" target="_blank">
              <img src={commingSoon} alt="img" />
            </a>
          </div>
          <div className="work" data-aos="fade-up">
            <a href="https://kiran-weather-app.netlify.app/" target="_blank">
              <img src={commingSoon} alt="img" />
            </a>
          </div>
          <div className="work" data-aos="fade-up">
            <a href="https://kiran-weather-app.netlify.app/" target="_blank">
              <img src={commingSoon} alt="img" />
            </a>
          </div>
          <div className="work" data-aos="fade-up">
            <a href="https://kiran-weather-app.netlify.app/" target="_blank">
              <img src={commingSoon} alt="img" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
