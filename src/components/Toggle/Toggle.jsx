import React from 'react'
import { useState } from 'react'
import './Toggle.css'



const Toggle = () => {

  const [toggleSwitch, setToggleSwitch] = useState(true)

  return (
    <div className={toggleSwitch ? 'toggle_container enabled' : 'toggle_container'} onClick ={() => {setToggleSwitch(!toggleSwitch)}}>
        <div className= { toggleSwitch ? "switch toggle_on" : 'switch'} onClick ={() => {setToggleSwitch(!toggleSwitch)}}>
            </div>
        </div>
  )
}

export default Toggle