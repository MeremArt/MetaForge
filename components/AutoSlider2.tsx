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
  };

  return (
    <div className="general_slides">
      <Slider {...settings}>
        <div className="individual_slides">
          <img
            src="https://res.cloudinary.com/dtfvdjvyr/image/upload/v1716857660/Frame_103_jnijnd.png"
            alt="features"
          />
        </div>
        <div className="individual_slides">
          <img
            src="https://res.cloudinary.com/dtfvdjvyr/image/upload/v1716857534/Frame_107_idhdcb.png"
            alt="features"
          />
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/dtfvdjvyr/image/upload/v1716857236/Frame_108_smedj4.png"
            alt="features"
          />
        </div>
        <div className="individual_slides">
          <img
            src="https://res.cloudinary.com/dtfvdjvyr/image/upload/v1716807921/Frame_104_2_jsgsq4.png"
            alt="features"
          />
        </div>
        <div className="individual_slides">
          <img
            src="https://res.cloudinary.com/dtfvdjvyr/image/upload/v1716857534/Frame_106_k3n6ez.png"
            alt="features"
          />
        </div>
        <div className="individual_slides">
          <img
            src="https://res.cloudinary.com/dtfvdjvyr/image/upload/v1716857238/Frame_105_ppjve4.png"
            alt="features"
          />
        </div>
      </Slider>
    </div>
  );
};

export default AutoPlaySlide2;
