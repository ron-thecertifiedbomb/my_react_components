import React, { useState } from "react";
import "./ContactUs.css";
import SearchBar from "../../components/SearchBar/SearchBar";

const ContactUs = () => {
  return (
    <section>
      <div className="search_bar_container">
        <div className="search_bar_wrapper">

      <SearchBar />
        </div>
        <div className="logo_wrapper">  <button className="button">Logo Icon</button></div>
    
      </div>
     
    </section>
  );
};

export default ContactUs;
