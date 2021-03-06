import React from 'react'
import "./work.css";
import Upwork from "../../img/Facebook.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/Shopify.png";
import { themeContext } from "../../Context";
import { useContext } from "react";
import {motion} from "framer-motion";
import {link} from "react-scroll";
const Work = () => {
    const trans = {
        duration: 3.5,
        type: "spring"
      }
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode
  return (
    <div className="work">
        <div className="awesome" >
            <span style={{color  : darkMode ? "white" : ""}}>Works for all these</span>
            <span>Brands & Clients</span>
            <span style={{color  : darkMode ? "white" : ""}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, facere.
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum dolor praesentium at non, dolore quod!
            </span>
            <a href='#'>
            <button className="button s-button">
                Hire me
            </button>
            </a>
            <div className="blur s-blur" style={{background: "#ABF1FF94"}}></div>
        </div>

        <div className="w-right">
            <motion.div
          initial={{rotate:45}}
          whileInView={{rotate:0}}
          transition= {trans}
            className="w-mainCircle">
                <div className="w-secCircle">
                    <img src={Fiverr} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Amazon} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Upwork} alt="" />
                </div>
            </motion.div>
            <div className=" blueCircle" style={{background  : darkMode ? "rgb(9, 74, 226)" : "rgb(9, 74, 226)"}}></div>
            <div className="yellowCircle" style={{color  : darkMode ? "rgb(255, 174, 0)" : "rgb(255, 174, 0)"}}></div>
        </div>
    </div>
  )
}

export default Work