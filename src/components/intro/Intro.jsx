import React from "react";
import "./intro.css";
import Floating from "../floating/Floating";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import Foto from "../../img/boy.png";
import Thumbup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import emoji from "../../img/glassesimoji.png";
import { themeContext } from "../../Context";
import { useContext } from "react";
const Intro = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{color  : darkMode ? "white" : ""}}>Hy! I Am</span>
          <span>Arya Budi Artana</span>
          <span>
            Fronted Web Developer with hight level of experience in web designing
            and development, producting the quality work
          </span>
        </div>
        <button className="button i-button">Hire me</button>
        <div className="i-icon">
          <a href="https://github.com/Arya-BudiArtana">
            <img src={Github} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/i-kadek-arya-budi-artana-06b4ba219/">
            <img src={LinkedIn} alt="" />
          </a>
          <a href="https://www.instagram.com/arya_budiartana/">
            <img src={Instagram} alt="" />
          </a>
        </div>
      </div>
      <div className="i-right">
          <img src={Vector1} alt="" />
          <img src={Vector2} alt="" />
          <img src={Foto} alt="" />
          <img src={emoji} alt="" />
          <div style={{top:'-4%', left:'68%'}}>
              <Floating image={Crown} txt1='Web' txt2 ='Developer'></Floating>
          </div>
          <div style={{top:'18rem', left:'0rem'}}>
              <Floating image={Thumbup} txt1='Frontend' txt2 ='Developer'></Floating>
          </div>
          <div className="blur" style={{background:"rgb(238 210 255"}}></div>
          <div className="blur" style={{background:"#C1F5FF", top:'17rem', width:'21rem', height:'11rem', left:'-9rem'}}></div>
      </div>
    </div>
  );
};

export default Intro;
