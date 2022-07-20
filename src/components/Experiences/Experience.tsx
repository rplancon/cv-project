import React from "react";

import "./Experience.css"

interface ExperienceProps {
  experience:{
    id: number;
    dates: string;
    job_title: string;
    company: string;
    missions: {
      id: number;
      text: string;
    }[];
  }
}
const Experience: React.FC<ExperienceProps> = props => {
  const experience = props.experience;
  return <div className="experience__container">
    <div className="experience__dates">
      <h3>{experience.dates}</h3>
    </div>
    <div className="experience__job">
      <h2 className="experience__job_title">{experience.job_title}</h2>
      <h4 className="experience__company">{experience.company}</h4>
      <ul className="experience__missions">
        {experience.missions.map(mission => (
          <li className="experience__mission" key={mission.id}>{mission.text}</li>
        ))}
      </ul>
    </div>
  </div>
};

export default Experience;