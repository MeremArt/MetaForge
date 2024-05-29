import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AutoPlaySlide = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "60px",
    autoplay: true,
    speed: 3000,
    draggable: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    nextArrow: false,
    prevArrow: false,
  };

  return (
    <div className="general_slides">
      <Slider {...settings}>
        <div className="individual_slides">
          <img
            src="https://res.cloudinary.com/dtfvdjvyr/image/upload/v1716968674/Frame_108_1_flg08b.png"
            alt="features"
          />
        </div>
        <div className="individual_slides">
          <img
            src="https://res.cloudinary.com/dtfvdjvyr/image/upload/v1716968674/Frame_107_1_xraikx.png"
            alt="features"
          />
        </div>
        <div className="individual_slides">
          <img
            src="https://res.cloudinary.com/dtfvdjvyr/image/upload/v1716968674/Frame_106_1_cszdhc.png"
            alt="features"
          />
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/dtfvdjvyr/image/upload/v1716968673/Frame_103_1_d64qoq.png"
            alt="features"
          />
        </div>
        <div className="individual_slides">
          <img
            src="https://res.cloudinary.com/dtfvdjvyr/image/upload/v1716968673/Frame_105_1_xra0yc.png"
            alt="features"
          />
        </div>
        <div className="individual_slides">
          <img
            src="https://res.cloudinary.com/dtfvdjvyr/image/upload/v1716968832/Frame_109_dmwurz.png"
            alt="features"
          />
        </div>
      </Slider>
    </div>
  );
};

export default AutoPlaySlide;
