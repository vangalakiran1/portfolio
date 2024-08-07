import React, { useEffect } from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import "./index.css";

export default function ContactMe() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const sendEmail = (event) => {
    event.preventDefault();
  };

  return (
    <div className="contact-container" id="contact">
      <div>
        <h2 className="contact-heading">Contact Me</h2>
        <div className="contact-box">
          <div className="contact-left-side" data-aos="fade-up">
            <a
              href="https://www.linkedin.com/in/kiran-kumar-vangala-117837221/"
              target="_blank"
              className="contact-links"
            >
              <FaLinkedin
                color="white"
                size={30}
                style={{ marginBottom: "10px" }}
              />
              Linked in
            </a>
            <a
              href="https://github.com/vangalakiran1"
              target="_blank"
              className="contact-links"
            >
              <FaGithubSquare
                color="white"
                size={30}
                style={{ marginBottom: "10px" }}
              />
              GitHub
            </a>
          </div>
          <div className="contact-right-side" data-aos="fade-up">
            <form onSubmit={sendEmail}>
              <div className="contact-form-box">
                <div className="contact-field">
                  <input
                    className="fullname"
                    type="text"
                    placeholder="FullName"
                  />
                </div>
                <div className="contact-field">
                  <input
                    className="fullname"
                    type="email"
                    placeholder="Email"
                  />
                </div>
                <div className="contact-field">
                  <textarea
                    className="fullname textarea-field"
                    type="email"
                    placeholder="Message"
                  ></textarea>
                </div>
                <button className="email-send-btn">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
