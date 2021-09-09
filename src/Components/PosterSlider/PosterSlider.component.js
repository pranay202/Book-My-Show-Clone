import React from "react";
import Slider from "react-slick";
import {settingsBg} from "../../config/PosterCorousal.config";

// config
import { PremierBgImages } from "../../config/TempPosters.config";

//component 
import { PosterBg } from "../Poster/Poster.component";

const PosterSlider = (props) => {
    return(
        <>
        <div className="flex flex-col items-start py-2 mx-5">
            <h3 className="text-xl leading-tight font-bold text-white">{props.title}</h3>
            <p className="font-semibold text-white">{props.subtitle}</p>
        </div>
        <Slider { ...settingsBg}>
            {PremierBgImages.map((image) => (
                <PosterBg { ...image} isDark={props.isDark} />
            ))}
        </Slider>
        </>
    )
}

export default PosterSlider;