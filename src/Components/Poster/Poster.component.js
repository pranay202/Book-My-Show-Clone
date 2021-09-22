import React from "react";

// Title, subtitle, darkmode  // at src you can use Premier Images 
const Poster = (props) => {
    return (
        <>
        <div className="flex flex-col items-start gap-2 px-5 left-16">
            <div className="h-full w-54">
                <img src={props.src} alt={props.title} className="w-full h-full rounded-xl sm:object-scale-down"/>
            </div>
            {/* <h3 className={`font-semibold text-lg items-start break-normal leading-6 dark:text-gray-300 text-gray-800" }`}>{props.title}</h3>
            <p className={`font-italic text-sm items-start dark:text-gray-400 text-gray-800" }`}>{props.subTitle}</p> */}
            <h3 className={`font-bold text-sm lg:text-lg break-words leading-6 ${props.isDark ? "text-gray-300" : "text-gray-800" }`}>{props.title}</h3>
            <p className={`font-italic text-xs lg:text-sm items-start ${props.isDark ? "text-gray-400" : "text-gray-800" }`}>{props.subTitle}</p>
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
                <img src={`https://image.tmdb.org/t/p/original${props.poster_path}`} alt={props.original_title} className="w-full h-full rounded-xl"/>
            </div>
            <h3 className={`font-semibold text-lg items-start break-normal leading-6 ${props.isDark ? "text-gray-300" : "text-gray-800" }`}>{props.original_title}</h3>
            <p className={`font-italic text-sm items-start ${props.isDark ? "text-gray-400" : "text-gray-800"  }`}>Language: {props.original_language}</p>
            {/* <h3 className={`font-bold text-lg items-start break-normal leading-6 ${props.isDark ? "text-gray-300" : "text-gray-800" }`}>{props.title}</h3>
            <p className={`font-italic text-sm items-start ${props.isDark ? "text-gray-400" : "text-gray-800" }`}>{props.subTitle}</p> */}
        </div>
        </>
    );
};

export const Cast = (props) => {
    return(
        <>
        <div className="flex flex-col items-center">
            <div className="h-32 w-32 mb-2">
                <img src={props.src} alt={props.title} className="w-full h-full rounded-full" />
            </div>
            <h3 className={` text-sm lg:text-lg break-words leading-6 ${props.isDark ? "text-gray-300" : "text-gray-800" }`}>{props.title}</h3>
            <p className={`font-italic text-xs lg:text-sm ${props.isDark ? "text-gray-400" : "text-gray-800" }`}>{props.subTitle}</p>
        </div>
        </>
    )
}