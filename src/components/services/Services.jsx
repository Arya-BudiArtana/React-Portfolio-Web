import React from 'react'
import "./services.css"
import Heart from "../../img/heartemoji.png"
import Glasses from "../../img/glasses.png"
import Humble from "../../img/humble.png"
import Card from '../cards/Card'
import Resume from "../../img/humble.png"
const Services = () => {
  return (
    <div className="services">
        <div className="awesome">
            <span>My Awesome</span>
            <span>Services</span>
            <span>
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
            <div style={{left:'2rem'}}>
                <Card emoji={Heart} heading={'Developer'} detail ={'HTML, CSS, JavaScript, React.js, Visual Basic'}></Card>
            </div>

            <div style={{left:'-8rem', top:'14rem'}}>
                <Card emoji={Glasses} heading={'Basics'} detail ={'Microsoft Excel, Microsoft Word, Microsoft Power Point'}></Card>
            </div>

            <div style={{left:'8rem', top:'17rem'}}>
                <Card emoji={Humble} heading={'Developer'} detail ={'HTML, CSS, JavaScript, React.js, Visual Basic'}></Card>
            </div>
        </div>
    </div>
  )
}

export default Services