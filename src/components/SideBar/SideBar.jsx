import React from "react";
import {data} from "../../assets/Helpers/Helper";
import { useState } from "react";
import "./SideBar.css";
import List from "../List/List";


const SideBar = () => {

const [toggle, setToToggle] = useState("");
const [activeIcon, setActiveIcon] = useState("Home");

  return (
    <div
      className="sidebar-container">
      <div className="logo">
        <h2>Eshop2drop IT</h2>
      </div>

      {data.map((item, index) => (
        <List
          key={index}
          icon={item.icon}
          shadedIcon={item.shadedIcon}
          name={item.name}
          arrow={item.arrow}
          link={item.link}
          toggle={toggle}
          setToToggle={setToToggle}
          linkOne={item.linkOne}
          linkTwo={item.linkTwo}
          to={item.to}
          activeIcon={activeIcon}
          setActiveIcon={setActiveIcon}
        />
      ))}
    </div>
  );
};

export default SideBar;
