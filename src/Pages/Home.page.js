import React from 'react';

import EntertainmentCardSlider from "../Components/Entertainment/Entertainment.component"

const HomePage = () => {
    return (
        <>
        <div className="container mx-auto px-4">
            <h1 className="text-2xl m-3 py-2 font-bold text-gray-700">
                Best of the Entertainment
            </h1>
        <EntertainmentCardSlider />
        </div>
        </>
    );
};

export default HomePage;