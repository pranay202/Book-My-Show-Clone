import React from "react";

// Title, subtitle, darkmode 
const Poster = (props) => {
    return (
        <>
        <div className="flex flex-col items-start gap-1 px-3 left-8">
            <div className="h-96 w-64">
                <img src={props.src} alt={props.title} className="w-full h-full rounded-xl"/>
            </div>
            <h3 className={`font-bold text-lg items-start break-normal leading-6 ${props.isDark ? "text-white" : "text-gray-800" }`}>{props.title}</h3>
            <p className={`font-italic text-sm items-start ${props.isDark ? "text-white" : "text-gray-800" }`}>{props.subTitle}</p>
        </div>
        </>
    );
};

export default Poster;