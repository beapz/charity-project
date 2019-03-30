// import React from "react";
// import Carousel from 'react-bootstrap/Carousel';

import React from "react";
import Slider from "react-slick";
import './style.css';

function SplashCarousel({ children }) {

  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 0,
          infinite: true,
          arrows: true,
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          infinite: true
        }
      }
    ]

  };
  return (
    <div>
      <h2> 3x3 Carousel </h2>
      <Slider {...settings}>
        {children}
      </Slider>
    </div>
  );
}


export default SplashCarousel;
