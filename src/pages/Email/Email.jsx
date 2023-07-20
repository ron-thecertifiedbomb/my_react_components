import React from "react";
import "./Email.css";
import Clock from "../../components/Clock/Clock";

const Email = () => {

  const getSwindonTime = () => {
    const options = {
      timeZone: "Europe/London",
      hour12: true,
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    };
    const swindonTime = new Date().toLocaleString("en-GB", options);
    return swindonTime;
  };

  const getManilaTime = () => {

    const options = {
      timeZone: "Asia/Manila",
      hour12: true,
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    };
    const manilaTime = new Date().toLocaleString("en-PH", options);
    return manilaTime;
  };

  const getBostonTime = () => {

    const options = {
      timeZone: "America/New_York",
      hour12: true,
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    };
    const bostonTime = new Date().toLocaleString("en-US", options);
    return bostonTime;
  };

  const getTokyoTime = () => {
    
    const options = {
      timeZone: "Asia/Tokyo",
      hour12: true,
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    };
    const tokyoTime = new Date().toLocaleString("en-JP", options);
    return tokyoTime;
  };

  return (
    <main>
      <div>
        <h3>Swindon, U.K.</h3>
        <Clock getTime={getSwindonTime} />

        <h3> Manila, Philippines</h3>
        <Clock getTime={getManilaTime} />

        <h3> Boston, U.S.</h3>
        <Clock getTime={getBostonTime} />

        <h3> Tokyo, Japan</h3>
        <Clock getTime={getTokyoTime} />
      </div>
    </main>
  );
};

export default Email;
