import React, { useState } from "react";
import {
  IconContainer,
  NavLinksContainer,
  NavBar,
} from "../../assets/Styles/style/";
import Logo from "../../assets/img/logo.svg";
import { navlinks } from "../../assets/Helpers/Helper";
import "./NavBar.css";

const NavigationBar = () => {
  const [activeLinks, setActvieLinks] = useState("Home");

  return (
    <NavBar>
      <IconContainer>
        <img src={Logo} alt="logo" style={{ width: "200px" }}></img>
      </IconContainer>
      <NavLinksContainer>
        <ul>
          {navlinks.map((item, index) => (
            <li
              key={index}
              className={activeLinks === item.name ? "activeLink" : ""}
              onClick={() => setActvieLinks(item.name)}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </NavLinksContainer>
    </NavBar>
  );
};

export default NavigationBar;
