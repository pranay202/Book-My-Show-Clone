// Premier Pro Bg Indigo Dark rupay sponsered
import React from 'react';
import Slider from "react-slick";
import { PrevArrowSm, NextArrowSm } from "../HeroCorousal/Arrows.component"

// Components
import Poster from "../Poster/Poster.component";

export const PremierBg = (props) => {

    const settings = {
        arrows: true,
        infinite: false,
        slidesToShow: 5,
        slidesToScroll: 5,
        InitialSlide: 0,
        prevArrow:<PrevArrowSm/>,
        nextArrow:<NextArrowSm/>
    }

    const PremierBgImages = [
        {
            title: "The Balkan Line",
            subTitle: "English",
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00312484-ehedpyzcmm-portrait.jpg"
        },
        {
            title: "The Nest",
            subTitle: "English",
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00137316-unmwlqfqvd-portrait.jpg"
        },
        {
            title: "Resistance",
            subTitle: "English",
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00310648-uwreepnzec-portrait.jpg"
        },
        {
            title: "The Secrets We Keep",
            subTitle: "English",
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00137312-qszmhzktyk-portrait.jpg"
        },
        {
            title: "Capone (2020)",
            subTitle: "English",
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00137455-pxtjxgdyua-portrait.jpg"
        },
        {
            title: "Proximity",
            subTitle: "English",
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00302306-xxwtjnexzz-portrait.jpg"
        },
        {
            title: "Another Round",
            subTitle: "Danish",
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00309748-ccphrtpnff-portrait.jpg"
        },
        {
            title: "The Tunnel",
            subTitle: "NorwEnglish",
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00303783-plktjmqsfm-portrait.jpg"
        },
        {
            title: "The Courier (2021)",
            subTitle: "English",
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00137324-urlznggrwz-portrait.jpg"
        },
        {
            title: "Radioactive",
            subTitle: "English",
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00302293-savbwcehey-portrait.jpg"
        },
    ];

    return (
        <>
        <div className="flex flex-col items-start py-2 mx-5">
            <h3 className="text-xl leading-tight font-bold text-white">Premiers</h3>
            <p className="font-semibold text-white">Brand new releases every Friday</p>
        </div>
        <Slider { ...settings}>
            {PremierBgImages.map((image) => (
                <Poster { ...image} />
            ))}
        </Slider>
        </>
    )
};

export default PremierBg;