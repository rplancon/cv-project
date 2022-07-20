import React from "react";

import "./Introduction.css";

interface IntroductionProps {
  introduction:{
    text: string;
  }
}

const Introduction:React.FC<IntroductionProps> = props => {
  return <div className="introduction__container">
    <p>{props.introduction.text}</p>
  </div>
};

export default Introduction;