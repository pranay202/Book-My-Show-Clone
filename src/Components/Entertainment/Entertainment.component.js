import React from "react";
import Slider from "react-slick";

// config
import {settingsEnt} from "../../config/PosterCorousal.config";
import { EntertainmentImage } from "../../config/TempPosters.config";

const EntertainmentCard = (props) => {
  return (
    <>
      <div className="w-30 h-30 px-5">
        <img
          className="rounded-xl"
          src={props.src}
          alt= {props.alt}
        />
      </div>
    </>
  );
};

    const EntertainmentCardSlider = () => {
        return (
            <>
            <Slider {...settingsEnt} className="md:grid-flow-row"  >
            {EntertainmentImage.map((image) => (
            <EntertainmentCard src={image} className="md:grid-flow-row"  />
            ))}
            </Slider>
            </>
        )
}

export default EntertainmentCardSlider;
