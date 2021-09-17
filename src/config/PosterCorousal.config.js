import { PrevArrowSm, NextArrowSm } from "../Components/HeroCorousal/Arrows.component";
import { PrevArrowSmallest, NextArrowSmallest } from "../Components/HeroCorousal/Arrows.component";

const settings = {
    dots: false,
    arrows: true,
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    InitialSlide: 0,
    prevArrow:<PrevArrowSm/>,
    nextArrow:<NextArrowSm/>,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                arrows: false
            },
        },
        {
            breakpoint: 420,
            settings: {
                slidesToShow: 1,
                arrows: false
            }
        }
    ]
}

export default settings;

export const settingsBg = {
    arrows: true,
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 5,
    InitialSlide: 0,
    prevArrow:<PrevArrowSm/>,
    nextArrow:<NextArrowSm/>,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                arrows:false,
                dots: true
            },
        },
        {
            breakpoint: 440,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows:false,
                dots: true
            }
        }
    ]
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
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                arrows: false,
                dots: true
            },
        },
        {
            breakpoint: 425,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows:false,
                dots: true
            }
        }
    ]
};