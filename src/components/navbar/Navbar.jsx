import React from "react";
import './navbar.css';
import Toggle from "../toggle/Toggle";
import {Link} from "react-scroll";
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
                        <Link spy={true} to='Navbar' activeClass='activeClass' smooth={true}>

                        <li>Home</li>
                        </Link>
                        <Link spy={true} to='Services' smooth={true}>

                        <li>Services</li>
                        </Link>
                        <Link spy={true} to='Exp' smooth={true}>

                        <li>Experiences</li>
                        </Link>
                        <Link spy={true} to='Portofolio' smooth={true}>

                        <li>Portfolio</li>
                        </Link>

                        <Link spy={true} to='Testi' smooth={true}>
                            <li>Testimonilas</li>
                        </Link>
                    </ul>
                </div>
            <Link spy={true} to='Contact' smooth={true}>
            <button className="button n-button">
                Contact
            </button>
            </Link>
            </div>
        </div>
    )
}

export default Navbar