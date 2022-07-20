import React from "react";

import "./Formation.css";

interface FormationProps {
  formation: {
    id: number;
    dates: string;
    title: string;
    school: string;
  }
};

const Formation:React.FC<FormationProps> = props => {
  const formation = props.formation;
  return <div className="formation__container">
    <div className="formation__dates">
      <h3>{formation.dates}</h3>
    </div>
    <div className="formation__details">
      <h2 className="formation__title">{formation.title}</h2>
      <h4 className="formation__school">{formation.school}</h4>
    </div>
  </div>
}

export default Formation;