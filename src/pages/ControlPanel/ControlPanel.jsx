import React, { useContext } from "react";
import { UserContext } from "../../UserContext";


const ControlPanel = () => {

  const msg = useContext(UserContext);
  return <div>{msg}
  
  </div>;

};

export default ControlPanel;
