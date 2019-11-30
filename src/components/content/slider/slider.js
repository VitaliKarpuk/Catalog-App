import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import car from '../../../img/car6.jpg'
import car2 from '../../../img/car4.jpg'
import car3 from '../../../img/car5.jpeg'

export const Sliders = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true
  };
    return(
      <Slider {...settings}>
        <div>
          <img src = {car} alt = 'Car' />
        </div>
        <div>
          <img src = {car2} alt = 'Car' />
        </div>
        <div>
          <img src = {car3} alt = 'Car' />
        </div>
      </Slider>
    )
}