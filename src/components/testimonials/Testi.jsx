import React from 'react';
import "./testi.css";
import {Swiper, SwiperSlide} from "swiper/react";
import Pp1 from "../../img/profile1.jpg";
import Pp2 from "../../img/profile2.jpg";
import Pp3 from "../../img/profile3.jpg";
import Pp4 from "../../img/profile4.jpg";
import {Pagination} from "swiper";
import "swiper/css/pagination";
import 'swiper/css';
import { themeContext } from "../../Context";
import { useContext } from "react";
const Testi = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode
    const clients = [
        {
            img: Pp1,
            review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex maxime eos, et non magnam distinctio officiis dicta similique earum facilis vero accusantium quos corrupti facere."


        },
        {
            img: Pp2,
            review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex maxime eos, et non magnam distinctio officiis dicta similique earum facilis vero accusantium quos corrupti facere."
            

        },
        {
            img: Pp3,
            review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex maxime eos, et non magnam distinctio officiis dicta similique earum facilis vero accusantium quos corrupti facere."
            

        },
        {
            img: Pp4,
            review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex maxime eos, et non magnam distinctio officiis dicta similique earum facilis vero accusantium quos corrupti facere."
            

        }
    ]
  return (
    <div className="testi" id="Testi">
        <div className="t-heading">
            <span>Clients always get </span>
            <span>Exceptional Work </span>
            <span>from me...</span>
            <div className="blur t-blur1" style={{background:'var(--purple)'}}></div>
            <div className="blur t-blur2" style={{background:'skyblue'}}></div>
        </div>
        <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{clickable: true}}
        
        >
            {clients.map((client, index)=> {
                return (
                <SwiperSlide key={index}>
                    <div className="testimonial">
                        <img src={client.img} alt="" />
                        <span style={{color  : darkMode ? "white" : ""}}>{client.review}</span>
                    </div>
                </SwiperSlide>
                )
            })}
        </Swiper>
    </div>
  )
}

export default Testi