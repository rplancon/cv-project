import React from "react";
import "./App.css";
import Contact from "./components/Contact";
import Experiences from "./components/Experiences/Experiences";
import Formations from "./components/Formations/Formations";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import Languages from "./components/Languages";
import Skills from "./components/Skills/Skills";
import { contact_data, experiences_data, formations_data, header_data, introduction__data, skills_data, languages_data } from "./Dummy_data";


const App: React.FC = () => {
  return (
    <div className="App">
      <div className="head_content">
        <Header header={header_data} />
        <Introduction introduction={introduction__data} />
      </div>
      <div className="side_content">
        <Contact contact={contact_data} />
        <Skills skills={skills_data}  />
        <Languages languages={languages_data} />
      </div>
      <div className="main_content">
        <Experiences experiences={experiences_data} />
        <Formations formations={formations_data} />
      </div>
    </div>
  );
};

export default App;
