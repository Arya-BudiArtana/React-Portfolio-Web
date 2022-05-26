import React from 'react'
import "./portfolio.css"
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import P1 from "../../img/sidebar.png";
import P2 from "../../img/ecommerce.png";
import P3 from "../../img/hoc.png";
import P4 from "../../img/musicapp.png";
import { themeContext } from "../../Context";
import { useContext } from "react";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode
  return (
    <div className="portfolio">
      <span style={{color  : darkMode ? "white" : ""}}>Recent Project</span>
      <span>Portfolio</span>

      <Swiper
      spaceBetween={30}
      slidesPerView={3}
      grabCursor={true}
      className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={P1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={P2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={P3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={P4} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Portfolio