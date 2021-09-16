import React from "react";
import MovieHero from "../Components/MovieHero/MovieHero.component";
import { BiCameraMovie } from "react-icons/bi";

const Movie = () => {
    return (
        <>
       <MovieHero />
       <div className="container my-12 lg:w-2/3 lg:pl-36">
           <div className="flex flex-col gap-3">
               <h2 className="text-gray-800 font-bold text-2xl">About the movie</h2>
               <p>An 80-year-old criminal lawyer along with his friends has a penchant for real-life games. They conduct a mock trial and decide if justice has been served, if not they make sure justice has been served.</p>
           </div>
           <div className="my-8">
               <hr/>
           </div>
           <div className="flex flex-col gap-3">
               <h1 className="text-gray-800 font-bold text-2xl">Applicable Offers</h1>
                   
               <div className="container w-5/12 flex bg-yellow-100 gap-3 rounded-lg border-2 border-dashed border-yellow-300">
               <BiCameraMovie className="w-9 h-6 text-white bg-red-600 rounded-sm ml-4 mt-3"/>
                   <div className="flex flex-col items-start py-2">
                       <h2 className="text-gray-700 font-semibold text-md">Filmy Pass</h2>
                       <p className="text-sm text-gray-600">Get Rs.75* off on 3 movies you buy/rent on Stream. Buy Filmy Pass @Rs.99</p>
                   </div>
               </div>
           </div>
       </div>
        </>
    );
};

export default Movie;