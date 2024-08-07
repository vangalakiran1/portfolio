import React, { useState, useEffect } from "react";
import skillData from "../jsonData/skill.json";
import AOS from "aos";
import "./index.css";
import "aos/dist/aos.css";

export default function Skills() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const [activeSkill, setActiveSkill] = useState(skillData[0].title);
  const chnageActiveSkill = (e) => {
    setActiveSkill(e.target.value);
  };

  const filteredArray = skillData.filter((eachItem) => {
    if (eachItem.title === activeSkill) {
      return eachItem.title;
    }
    return "";
  });
  //   filteredArray.map((tool) => console.log(tool.toolName));
  //   console.log(filteredArray);

  return (
    <div data-aos="fade-up" className="skills-container" id="skills">
      <div>
        <h2 className="sub-title-heading">Skills</h2>
        <div className="skill-inner-containere">
          <div className="skill-headings-container">
            {skillData.map((eachItem) => (
              <button
                className={`${
                  activeSkill === eachItem.title ? "active" : ""
                } skill-heading-box`}
                style={{ color: "white" }}
                onClick={chnageActiveSkill}
                value={eachItem.title}
                key={eachItem.title}
              >
                {eachItem.title}
              </button>
            ))}
          </div>
          <div className="skill-content-container">
            <h4 className="skill-content-heading">{filteredArray[0].title}</h4>
            <div className="progress-container">
              {/* {filteredArray.toolName.map((eachTool) =>
                console.log(eachTool.name)
              )} */}
              {filteredArray[0].toolName.map((eachTool) => (
                <div key={eachTool.name} className="progress-inner">
                  <p className="tool-name">
                    <span>{eachTool.name}</span>
                    <span>{eachTool.percentage}</span>
                  </p>
                  <div className="progress-box">
                    <div
                      className="progress-bar"
                      style={{ width: eachTool.percentage }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
