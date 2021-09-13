import React from "react";

// Title, subtitle, darkmode 
const Poster = (props) => {
    return (
        <>
        <div className="flex flex-col items-start gap-2 px-5 left-16">
            <div className="h-96 w-58">
                <img src={props.src} alt={props.title} className="w-full h-full rounded-xl "/>
            </div>
            {/* <h3 className={`font-semibold text-lg items-start break-normal leading-6 dark:text-gray-300 text-gray-800" }`}>{props.title}</h3>
            <p className={`font-italic text-sm items-start dark:text-gray-400 text-gray-800" }`}>{props.subTitle}</p> */}
            <h3 className={`font-bold text-lg items-start break-normal leading-6 ${props.isDark ? "text-gray-300" : "text-gray-800" }`}>{props.title}</h3>
            <p className={`font-italic text-sm items-start ${props.isDark ? "text-gray-400" : "text-gray-800" }`}>{props.subTitle}</p>
        </div>
        </>
    );
};

export default Poster;

export const PosterBg = (props) => {
    return (
        <>
        <div className="flex flex-col items-start gap-2 px-5 left-16">
            <div className="h-80 w-58">
                <img src={props.src} alt={props.title} className="w-full h-full rounded-xl"/>
            </div>
            <h3 className={`font-semibold text-lg items-start break-normal leading-6 ${props.isDark ? "text-gray-300" : "text-gray-800" }`}>{props.title}</h3>
            <p className={`font-italic text-sm items-start ${props.isDark ? "text-gray-400" : "text-gray-800"  }`}>{props.subTitle}</p>
            {/* <h3 className={`font-bold text-lg items-start break-normal leading-6 ${props.isDark ? "text-gray-300" : "text-gray-800" }`}>{props.title}</h3>
            <p className={`font-italic text-sm items-start ${props.isDark ? "text-gray-400" : "text-gray-800" }`}>{props.subTitle}</p> */}
        </div>
        </>
    );
};