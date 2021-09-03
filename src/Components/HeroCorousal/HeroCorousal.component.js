import React from "react";
import HeroSlider from "react-slick";

//Arrow Component
import { PrevArrow , NextArrow } from "./Arrows.component";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const HeroCorousal = () => {

  const settingsLg = {
      arrows: true,
      dots: true,
      autoplay: true,
      centerMode: true,
      slidesToShow:1,
      slidesToScroll:1,
      centerPadding: "300px",
      infinite:true,
      prevArrow: <PrevArrow/>,
      nextArrow: <NextArrow/>
  }

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow/>,
    nextArrow: <NextArrow/>
  };

const images = [
    "https://in.bmscdn.com/promotions/cms/creatives/1630474590730_mardkodardnhihota_1240x300_1sep.jpg",
    "https://in.bmscdn.com/promotions/cms/creatives/1629830049996_celebfiecruisewiththestarsrevised_webshowcase_1240x300_24aug.jpg",
    "https://in.bmscdn.com/promotions/cms/creatives/1628591224466_fnbgeneric.jpg",
    "https://in.bmscdn.com/promotions/cms/creatives/1630640289124_breakingsurface_1240x300.jpg",
    "https://in.bmscdn.com/promotions/cms/creatives/1630608713679_matrixfightnight6_webshowcase_1240x300.jpg"
];

return (
    <>
    
    <div className="lg:hidden">
    <HeroSlider {...settings}>
        {images.map((image) => (
            <div className="w-full h-64 md:h-80 p-3">
                <img src={image} alt="testing" className="w-full h-full rounded-md"/>
            </div>
        ))}
    </HeroSlider>
    </div>

    <div className="hidden lg:block">
    <HeroSlider {...settingsLg}>
        {images.map((image) => (
            <div className="w-full h-96 px-2 py-3">
                <img src={image} alt="testing" className="w-full h-full rounded-md"/>
            </div>
        ))}
    </HeroSlider>
    </div>
    </>
);
};

export default HeroCorousal;