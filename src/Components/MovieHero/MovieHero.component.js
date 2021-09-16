import React from "react";

const MovieHero = () => {
    return (
        <>
        <div className="md:hidden">
            <img src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/chehre-et00102880-25-08-2021-07-26-46.jpg"
                 alt="poster"
            />
        </div>

        <div className="hidden md:block lg:hidden">
            <img src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/chehre-et00102880-25-08-2021-07-26-46.jpg" 
                alt="poster"
            />
        </div>

        <div className="relative hidden lg:block shadow-inner"  style={{height: "35rem"}}>
        <div 
        className="absolute w-full h-full z-20"
        style={{ backgroundImage: "linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%"}}
        />
            <div className="absolute z-30 left-32 top-16">
                <img src="https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/chehre-et00102880-25-08-2021-07-26-46.jpg" 
                alt="poster"
                className="w-4/5 h-5/6 rounded-xl"
                />   
            </div>
            <img src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/chehre-et00102880-25-08-2021-07-26-46.jpg"
            alt="poster"
            className="w-full h-full absolute bg-gray-900 outline-none"
            />
        </div>
        </>
    );
};

export default MovieHero;