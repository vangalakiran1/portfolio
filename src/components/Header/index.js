import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { Link } from "react-scroll";
import "./index.css";

export default function Header() {
  const [isOpen, setOpen] = useState(false);
  const toggleBtn = () => {
    setOpen((prevState) => !prevState);
  };
  return (
    <header>
      <div className="headerInner">
        <a href="#" className="logo">
          <HiMenu size={24} onClick={toggleBtn} className="menuBtn" />
          <span style={{ marginLeft: "15px" }}> Kiran</span>
        </a>
        <nav>
          <ul className={`${isOpen ? "active" : ""} menu`}>
            <IoClose className="closeBtn" onClick={toggleBtn} />
            <li>
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                className="nav-item"
                onClick={toggleBtn}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="skills"
                spy={true}
                smooth={true}
                offset={-150}
                duration={500}
                className="nav-item"
                onClick={toggleBtn}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-150}
                duration={500}
                className="nav-item"
                onClick={toggleBtn}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="nav-item"
                onClick={toggleBtn}
              >
                Contact Me
              </Link>
            </li>
          </ul>
        </nav>
        <button className="cv-btn">Hire Me</button>
      </div>
    </header>
  );
}
