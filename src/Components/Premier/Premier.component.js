import React from 'react';
import Slider from "react-slick";

// Components
import Poster from "../Poster/Poster.component";

// config
import settings from "../../config/PosterCorousal.config";
import {PremierImages} from "../../config/TempPosters.config";

export const Premier = (props) => {

    return (
        <>
        <Slider { ...settings}>
            {PremierImages.map((image) => (
                <Poster { ...image} />
            ))}
        </Slider>
        </>
    )
};

export default Premier;

