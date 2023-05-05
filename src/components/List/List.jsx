import React from "react";
import "./ListStyle.css";
import { NavLink } from "react-router-dom";

const List = ({
  icon,
  shadedIcon,
  name,
  arrow,
  toggle,
  setToToggle,
  linkOne,
  linkTwo,
  to,
  activeIcon,
  setActiveIcon,
}) => {
 
  return (
    <div className="list_main_wrapper">
      <div className="list_sub_wrapper">
        <div className="list_menu">
          <div className="list_icons">
            {activeIcon === name ? shadedIcon : icon}
          </div>

          <div className="list_title">
            <NavLink to={to} onClick={() => setActiveIcon(name)}>
              <h4>{name}</h4>
            </NavLink>
          </div>
        </div>

        <div
          className={toggle === name ? "list_arrows toggle" : "list_arrows"}
          onClick={
            toggle === name ? () => setToToggle(null) : () => setToToggle(name)
          }
        >
          {arrow}
        </div>
      </div>

      <div className={toggle === name ? "list_content show " : "list_content"}>
        <div className="sub-content">
          <p> {linkOne}</p>
          <p> {linkTwo}</p>
        </div>
      </div>
    </div>
  );
};

export default List;
