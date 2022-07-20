import React from "react";

import "./Skill.css";

interface SkillProps {
  skill:{
    id: number;
    name: string;
    note: number;
  }
};

const Skill: React.FC<SkillProps> = props => {
  const skill = props.skill;

  let note: any[]=[];
  for (let index = 0; index < 5; index++) {
    if (index < skill.note) {
      note.push(<i className="fa-solid fa-circle checked" key={index}></i>);
    } else {
      note.push(<i className="fa-solid fa-circle unchecked" key={index}></i>);
    }
  }

  return <>
    <div className="skill__name">{skill.name}</div>
    <div className="skill__note">{note}</div>
  </>
};

export default Skill;