import React from 'react';
import Slider from "react-slick";
import { PrevArrowSm, NextArrowSm } from "../HeroCorousal/Arrows.component"

// Components
import Poster from "../Poster/Poster.component";

export const Premier = (props) => {

    const settings = {
        arrows: true,
        infinite: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        InitialSlide: 0,
        prevArrow:<PrevArrowSm/>,
        nextArrow:<NextArrowSm/>
    }

    const PremierImages = [
        {
            title: `Shang-Chi and the Legend of Ten Rings`,
            subTitle: "Action/Adventure/Fantasy",
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-OTJrIGxpa2Vz,ots-29,otc-FFFFFF,oy-612,ox-70/et00122566-njxmhcuchb-portrait.jpg"
        },
        {
            title: "Fast and Furious 9",
            subTitle: "Action/Adventure/Crime/Thriller",
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-ODIlICAzayB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00056556-cmljhpnhcd-portrait.jpg"
        },
        {
            title: "The Conjuring: The Devil Made Me Do It",
            subTitle: "Horror/Thriller",
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzAlICA3ayB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00122455-djhnmgmtvw-portrait.jpg"
        },
        {
            title: "Bell Bottom",
            subTitle: "Action/Thriller",
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzklICAyMWsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00117102-gukaentnqs-portrait.jpg"
        },
        {
            title: "Notoka Jilala Andagadu",
            subTitle: "Comedy/Drama",
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MWsgbGlrZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00308822-bbujjtsfjz-portrait.jpg"
        },
        {
            title: "Chehre",
            subTitle: "Mystery/Thriller",
            src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NjglICAxMWsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00102880-eudztbwuwx-portrait.jpg"
        },
    ];

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