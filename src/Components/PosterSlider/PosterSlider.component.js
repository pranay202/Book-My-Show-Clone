import React from "react";
import Slider from "react-slick";
import {settingsBg} from "../../config/PosterCorousal.config";

// config
// import  PremierImages  from "../../config/TempPosters.config";

//component 
import Poster  from "../Poster/Poster.component";

const PosterSlider = (props) => {
    return(
        <>
        <div className="flex flex-col items-start pb-4 mx-5">
            <h3 className="text-2xl leading-tight font-bold dark:text-gray-300 text-gray-700">{props.title}</h3>
            <p className="font-semibold dark:text-gray-300 text-gray-700">{props.subtitle}</p>
        </div>
        <Slider { ...settingsBg}>
            {props.images.map((image) => (
                <Poster { ...image} isDark={props.isDark} />
            ))}
        </Slider>
        </>
    )
}

export default PosterSlider;