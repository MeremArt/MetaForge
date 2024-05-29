import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AutoPlaySlide2 = () => {
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
    rtl: true,
    nextArrow: false,
    prevArrow: false,
  };

  return (
    <div className="general_slides">
      <Slider {...settings}>
        <div className="individual_slides">
          <img
            src="https://res.cloudinary.com/dtfvdjvyr/image/upload/v1717006459/Frame_109_2_omxl1x.png"
            alt="features"
          />
        </div>
        <div className="individual_slides">
          <img
            src="https://res.cloudinary.com/dtfvdjvyr/image/upload/v1717006459/Frame_108_2_byiv19.png"
            alt="features"
          />
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/dtfvdjvyr/image/upload/v1717006458/Frame_107_2_nz2dpi.png"
            alt="features"
          />
        </div>
        <div className="individual_slides">
          <img
            src="https://res.cloudinary.com/dtfvdjvyr/image/upload/v1717006458/Frame_106_2_zxpt2r.png"
            alt="features"
          />
        </div>
        <div className="individual_slides">
          <img
            src="https://res.cloudinary.com/dtfvdjvyr/image/upload/v1717006456/Frame_103_2_fcu4h1.png"
            alt="features"
          />
        </div>
        <div className="individual_slides">
          <img
            src="https://res.cloudinary.com/dtfvdjvyr/image/upload/v1717006457/Frame_105_2_tkltlr.png"
            alt="features"
          />
        </div>
        <div className="individual_slides">
          <img
            src="https://res.cloudinary.com/dtfvdjvyr/image/upload/v1717006458/Frame_104_3_ayowjm.png"
            alt="features"
          />
        </div>
      </Slider>
    </div>
  );
};

export default AutoPlaySlide2;
