import React from 'react'
import { TiWeatherWindy } from "react-icons/ti";
import { TiWeatherWindyCloudy } from "react-icons/ti";
import { FaCity } from "react-icons/fa";
import { CiMap } from "react-icons/ci";
import { VscSettings } from "react-icons/vsc";

const Side = () => {
  return (
    <div className='sidecon'>
      <div className="logocon">
      <TiWeatherWindy />
      </div>
      <div className="menuitem">
        <div className="icon">
          <a href="#">
            <TiWeatherWindyCloudy/>
          </a>
        </div>
        <div className="icon">
          <a href="#">
            <FaCity/>
          </a>
        </div>
        <div className="icon">
          <a href="#">
            <CiMap/>
          </a>
        </div>
        <div className="icon">
          <a href="#">
            <VscSettings/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Side