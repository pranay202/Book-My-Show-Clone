import React from 'react';

// Components
import EntertainmentCardSlider from "../Components/Entertainment/Entertainment.component";
import Premier from "../Components/Premier/Premier.component";

const HomePage = () => {
    return (
        <>
        <div className="container mx-auto px-14">
            <h1 className="text-2xl m-3 py-2 font-bold text-gray-700">
                Best of the Entertainment
            </h1>
        <EntertainmentCardSlider />
        </div>
<br/>
        <div className="container mx-auto px-14">
            <h1 className="text-2xl m-3 py-2 font-bold text-gray-700">
                Recommended Movies
            </h1>        
        <Premier />
        </div>
        </>
    );
};

export default HomePage;