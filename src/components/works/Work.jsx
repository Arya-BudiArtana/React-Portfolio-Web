import React from 'react'
import "./work.css";
const Work = () => {
  return (
    <div className="work">
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
    </div>
  )
}

export default Work