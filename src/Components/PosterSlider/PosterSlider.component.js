import React from "react";
import Slider from "react-slick";
import { settingsBg } from "../../config/PosterCorousal.config";

// config
// import  PremierImages  from "../../config/TempPosters.config";

//component 
import Poster, { PosterBg, Cast } from "../Poster/Poster.component";

const PosterSlider = (props) => {
    return(
        <>
        <div className="flex flex-col items-center pb-4 lg:mx-5">
            <h3 className="lg:text-2xl leading-tight font-bold text-gray-700">{props.title}</h3>
            <p className="font-semibold text-gray-700">{props.subtitle}</p>
        </div>
        <Slider { ...settingsBg}>
            {props.images.map((image) => (
                <Poster { ...image} isDark={props.isDark} />
            ))}
        </Slider>
        </>
    );
};

export default PosterSlider;

export const PosterSliderBg = (props) => {
    return(
        <>
        <div className="flex flex-col items-start pb-4 lg:mx-5">
            <h3 className="lg:text-2xl leading-tight font-bold text-gray-300">{props.title}</h3>
            <p className="font-semibold text-gray-300">{props.subtitle}</p>
        </div>
        <Slider { ...settingsBg}>
            {props.images.map((image) => (
                <PosterBg { ...image} isDark={props.isDark} />
            ))}
        </Slider>
        </>
    )
}

export const CastSlider = (props) => {
    return(
        <>
        <div className="flex flex-col items-start pb-4 lg:mx-5">
        <h3 className="lg:text-2xl leading-tight font-bold text-gray-700">{props.title}</h3>
            <p className="font-semibold text-gray-700">{props.subtitle}</p>
        
        </div>
        <Slider { ...settingsBg}>
            {props.images.map((image) => (
                <Cast { ...image} isDark={props.isDark} />
            ))}
        </Slider>
        </>
    )
}