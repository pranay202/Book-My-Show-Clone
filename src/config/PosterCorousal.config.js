import { PrevArrowSm, NextArrowSm } from "../Components/HeroCorousal/Arrows.component";
import { PrevArrowSmallest, NextArrowSmallest } from "../Components/HeroCorousal/Arrows.component";

const settings = {
    arrows: true,
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    InitialSlide: 0,
    prevArrow:<PrevArrowSm/>,
    nextArrow:<NextArrowSm/>
}

export default settings;

export const settingsBg = {
    arrows: true,
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 5,
    InitialSlide: 0,
    prevArrow:<PrevArrowSm/>,
    nextArrow:<NextArrowSm/>
}


export const settingsEnt = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 1200,
    slidesToShow: 5,
    slidesToScroll: 4,
    InitialSlide: 0,
    prevArrow:<PrevArrowSmallest/>,
    nextArrow:<NextArrowSmallest/>,
};