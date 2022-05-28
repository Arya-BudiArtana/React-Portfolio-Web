import React from 'react'
import "./services.css"
import Heart from "../../img/heartemoji.png"
import Glasses from "../../img/glasses.png"
import Humble from "../../img/humble.png"
import Card from '../cards/Card'
import Resume from "../../img/humble.png"
import { themeContext } from "../../Context";
import { useContext } from "react";
import {motion} from "framer-motion"
const Services = () => {
    const trans = {
        duration: 1,
        type: "spring"
      }
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode
  return (
    <div className="services" id="Services">
        <div className="awesome">
            <span style={{color  : darkMode ? "white" : ""}}>My Awesome</span>
            <span>Services</span>
            <span style={{color  : darkMode ? "white" : ""}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, facere.
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum dolor praesentium at non, dolore quod!
            </span>
            <a href={Resume} download>
            <button className="button s-button">
                Download CV
            </button>

            </a>
            <div className="blur s-blur" style={{background: "#ABF1FF94"}}></div>
        </div>

        <div className="cards">
            <motion.div
          initial={{left: '14rem'}}
          whileInView={{left: "25%"}}
          transition= {trans}            
            style={{left:'2rem'}}>
                <Card emoji={Heart} heading={'Work on'} detail ={'HTML, CSS, JavaScript, React.js, Visual Basic'}></Card>
            </motion.div>

            <div style={{left:'-8rem', top:'14rem'}}>
                <Card emoji={Glasses} heading={'Basics'} detail ={'Microsoft Excel, Microsoft Word, Microsoft Power Point'}></Card>
            </div>

            <motion.div 
            style={{left:'8rem', top:'17rem'}}>
                <Card emoji={Humble} heading={'Developer'} detail ={'Landing Pages, WordPress, Personal/Portfolio Web, '}></Card>
            </motion.div>
            <div className="blur s-blur2" style={{background: "var(--purple)"}}></div>
        </div>
    </div>
  )
}

export default Services