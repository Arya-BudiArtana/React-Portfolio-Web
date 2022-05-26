import React from "react";
import './navbar.css';
import Toggle from "../toggle/Toggle";
const Navbar = () => {
    return (
        <div className="n-wrapper">
            <div className="n-left">
                <div className="n-name">Arya</div>
                <Toggle></Toggle>
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul>
                        <li>Home</li>
                        <li>Services</li>
                        <li>Experiences</li>
                        <li>Portfolio</li>
                    </ul>
                </div>
            <button className="button n-button">
                Contact
            </button>
            </div>
        </div>
    )
}

export default Navbar