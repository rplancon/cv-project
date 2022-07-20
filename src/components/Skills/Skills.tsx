import React from "react";
import Skill from "./Skill";

import "./Skills.css";

interface SkillsProps {
  skills:{
    id:number;
    name:string;
    note:number;
  }[]
};

const Skills: React.FC<SkillsProps> = props => {
  const skills = props.skills;
  return <div className="skills__container">
    <h2 className="skills__section_title">Compétences</h2>
    <div className="skills__list">
      {skills.map(skill => (<Skill skill={skill} key={skill.id} />))}
    </div>
  </div>
}

export default Skills;