import React from 'react';

// Components
import EntertainmentCardSlider from "../Components/Entertainment/Entertainment.component";
import Premier from "../Components/Premier/Premier.component";
import PosterSlider from "../Components/PosterSlider/PosterSlider.component";

//config 
import TempPosters from "../config/TempPosters.config";
// import PremierImages from '../config/TempPosters.config';

const HomePage = () => {
    return (
        <>
        <div className="flex flex-col my-14 gap-7 px-14">

        <div className="container mx-auto px-14">
            <h1 className="text-2xl my-3 mx-5 py-2 font-bold text-gray-700">
                Recommended Movies
            </h1>        
        <Premier />
        </div>

        <div className="container mx-auto px-14">
            <h1 className="text-2xl my-3 mx-5 py-2 font-bold text-gray-700">
               The Best of the Entertainment
            </h1>
        <EntertainmentCardSlider />
        </div>
       </div>

        <div className="bg-navLgColor-100 flex flex-col my-14 gap-7 py-14 px-14">

            <div className="container mx-auto px-14 text-gray-300">
            <div className="flex">
            <img
            src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
            alt="Premier"
            className="w-full h-full mx-auto"
            />
            </div>
                <PosterSlider className="w-full h-full mx-auto" images={TempPosters} title="Premiers" subtitle="Brand new releases every Friday" isDark="false" />
            </div>
        </div>

        
       </>
    );
};

export default HomePage;