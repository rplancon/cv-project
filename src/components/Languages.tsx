import React from "react";

import "./Languages.css";
import Skill from "./Skills/Skill";

interface LanguagesProps {
  languages: {
    id:number;
    name:string;
    note:number;
  }[]
}

const Languages: React.FC<LanguagesProps> = props => {
  const languages = props.languages;
  
  return <div className="languages__container">
    <h2 className="languages__section_title">Langues</h2>
    <div className="languages__list">
      {languages.map(language => (<Skill skill={language} key={language.id} />))}
    </div>
  </div>
};

export default Languages;