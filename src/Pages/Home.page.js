import React from 'react';

// Components
import EntertainmentCardSlider from "../Components/Entertainment/Entertainment.component";
import Premier from "../Components/Premier/Premier.component";
import PremierBg from "../Components/Premier/PremierBg.component";

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

        <div className="container mx-auto px-10">
            <h1 className="text-2xl my-3 mx-5 py-2 font-bold text-gray-700">
               The Best of the Entertainment
            </h1>
        <EntertainmentCardSlider />
        </div>
       </div>

        <div className=" flex bg-navLgColor-100 py-16 px-14">

            <div className="container mx-auto text-gray-300">
            <div className="flex">
            <img
            src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
            alt="Premier"
            className="w-full h-full mx-auto"
            />
            </div>
                <PremierBg className="w-full h-full mx-auto" />
            </div>
        </div>

       </>
    );
};

export default HomePage;