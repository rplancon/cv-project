import React from "react";

import "./Header.css";

interface HeaderProps {
  header: {
    name: string;
    title: string;
  }
}

const Header: React.FC<HeaderProps> = props => {
  const header = props.header;
  return <div className="header__container">
      <h1 className="header__name">{header.name}</h1>
      <h2 className="header__title">{header.title}</h2>
    </div>;
}

export default Header;