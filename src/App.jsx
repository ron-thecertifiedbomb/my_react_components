import React from "react";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import SideBar from "./components/SideBar/SideBar";
import "./App.css";
import { UserContext } from "./UserContext";
import {
  Home,
  Settings,
  ContactUs,
  Savings,
  Edit,
  Help,
  ControlPanel,
  Support,
  Email,
} from "./pages/index";

function App() {
  const [showSideBar, ToShowSideBar] = useState(true);
  const [user, setUser] = useState("Lizard Interactive Softaware Compnay");

  return (
    <div className="App">
      <div className="main_page_layout">
        <div
          className={showSideBar ? "sidebar_wrapper show" : "sidebar_wrapper"}
        >
          <SideBar />
        </div>
        <div className="page_column">
          <div className="page_content_wrapper">
            <UserContext.Provider value={user}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/contactus" element={<ContactUs />} />
                <Route path="/savings" element={<Savings />} />
                <Route path="/edit" element={<Edit />} />
                <Route path="/help" element={<Help />} />
                <Route path="/controlpanel" element={<ControlPanel />} />
                <Route path="/support" element={<Support />} />
                <Route path="/email" element={<Email />} />
              </Routes>
            </UserContext.Provider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
