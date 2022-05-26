import React from 'react'
import "./footer.css"
import Wave from '../../img/wave.png'
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Fb from "@iconscout/react-unicons/icons/uil-facebook";
import Git from "@iconscout/react-unicons/icons/uil-github";
const Footer = () => {
  return (
    <div className="footer">
        <img src={Wave} alt="" style={{width:'100%'}}/>
        <div className="f-content">
            <span>aryabudiartana69@gmail.com</span>
            <div className="f-icons">
                <a href="https://www.instagram.com/arya_budiartana/">
                <Insta size='3rem' color="white" />

                </a>
                <a href="https://web.facebook.com/aryabudi.artana/">
                <Fb size='3rem' color="white" />

                </a>
                <a href="https://github.com/Arya-BudiArtana">

                <Git size='3rem' color="white" />
                </a>
            </div>
        </div>
    </div>
  )
}

export default Footer