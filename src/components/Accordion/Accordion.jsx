import React from "react";
import { useState } from "react";
import { accordion } from "../../assets/Helpers/Helper";
import "./Accordion.css";

const Accordion = () => {
  const [open, setToOpen] = useState("");

  return (
    <div className="accordion_main_wrapper">
      {accordion.map((item, index) => (
        <div className="accordion_sub_wrapper">
          <div className= "accordion_heading " key={index}>
            <h4>{item.name}</h4>

            <div className="icon"
             
              onClick={
                open === item.name
                  ? () => setToOpen(null)
                  : () => setToOpen(item.name)
              }
            >
              {open === item.name ? item.minus : item.plus  }
            </div>
          </div>

          <div
            className={
              open === item.name
                ? "accordion_content open"
                : "accordion_content"
            }
          >
            <div className="accordion_subcontent">
              <p>{item.para}</p>
              <p>{item.paraTwo}</p>
              <ul>
                <li>{item.liOne}</li>
                <li>{item.liTwo}</li>
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
