import React from "react";
import Experience from "./Experience";

import "./Experiences.css";

interface ExperiencesProps {
  experiences: {
    id: number;
    dates: string;
    job_title: string;
    company: string;
    missions: {
      id: number;
      text: string;
    }[];
  }[];
}

const Experiences: React.FC<ExperiencesProps> = (props) => {
  const experiences = props.experiences;
  return <div className="experiences__container">
      <h2 className="experiences__section_title">Parcours professionnel</h2>
      {experiences.map(experience => (<Experience experience={experience} key={experience.id}/>))}
      
    </div>
}

export default Experiences;