import React from 'react';

// Components
import EntertainmentCardSlider from "../Components/Entertainment/Entertainment.component";
import Premier from "../Components/Premier/Premier.component";

const HomePage = () => {
    return (
        <>
        <div className="flex flex-col gap-10">

        <div className="container mx-auto px-14">
            <h1 className="text-2xl m-3 py-2 font-bold text-gray-700">
                Best of the Entertainment
            </h1>
        <EntertainmentCardSlider />
        </div>

        <div className="container mx-auto px-14">
            <h1 className="text-2xl m-3 py-2 font-bold text-gray-700">
                Recommended Movies
            </h1>        
        <Premier />
        </div>

        <div className="bg-navLgColor-100 py-16 mx-auto">

            <div className="container mx-auto px-14 text-gray-300">
            <div className="flex">
            <img
            src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
            alt="Premier"
            className="w-full h-full mx-auto"
            />
            </div>
                <Premier isDark />
            </div>
        </div>

       </div>
       </>
    );
};

export default HomePage;