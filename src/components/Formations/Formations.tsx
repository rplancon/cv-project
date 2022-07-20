import React from "react";

import Formation from "./Formation";

import "./Formations.css";

interface FormationsProps {
  formations: {
    id: number;
    dates: string;
    title: string;
    school: string;
  }[];
};

const Formations: React.FC<FormationsProps> = (props) => {
  const formations = props.formations;
  return <div className="formations__container">
      <h2 className="formations__section_title">Formation</h2>
      {formations.map(formation => (<Formation formation={formation} key={formation.id}/>))}
      
    </div>
}

export default Formations;