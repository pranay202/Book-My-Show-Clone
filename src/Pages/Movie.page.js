import React from "react";
// import Slider from "react-slick";
// import {settingsBg} from "../config/PosterCorousal.config";

import MovieHero from "../Components/MovieHero/MovieHero.component";
import { BiCameraMovie } from "react-icons/bi";
import {CastImages} from "../config/TempPosters.config";
import { CastSlider } from "../Components/PosterSlider/PosterSlider.component";

export const launchRazorPay = () => {
    let options = {
        key: "rzp_test_VHws7fEZvdkwI4",
        amount: 100*100,
        currency: "USD",
        name: "Book My Show",
        description: "Movie purchase on rental",
        image: "https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png",
        handler: () => {
            alert("Payment Done!")
        },
        theme: {color: "#c4242d"}
    };
    let rzp = new window.Razorpay(options);
    rzp.open();
};

const Movie = (props) => {
    return (
        <>
       <MovieHero />
       <div className="container my-8 px-7 lg:w-2/3 lg:pl-36">
           <div className="flex flex-col gap-3">
               <h2 className="text-gray-800 font-bold text-xl lg:text-2xl">About the movie</h2>
               <p className="text-xs md:text-base">An 80-year-old criminal lawyer along with his friends has a penchant for real-life games. 
               They conduct a mock trial and decide if justice has been served, if not they make sure justice has been served.</p>
           </div>
           <div className="my-5">
               <hr/>
           </div>

           {/* //Offers */}
           <div className="flex flex-col gap-3">
               <h1 className="text-gray-800 font-bold text-xl lg:text-2xl">Applicable Offers</h1>
                   
               <div className="container w-5/6 lg:w-7/12 flex bg-yellow-100 gap-3 rounded-lg border-2 border-dashed border-yellow-300">
               <img src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png" className="w-8 h-8 ml-4 mt-3"/>
                   <div className="flex flex-col items-start py-2">
                       <h2 className="text-gray-700 font-semibold text-md">Filmy Pass</h2>
                       <p className="text-sm text-gray-600">Get Rs.75* off on 3 movies you buy/rent on Stream. Buy Filmy Pass @Rs.99</p>
                   </div>
               </div>
                   <div className="my-5">
                    <hr/>
                   </div>
           </div>

           {/* //Cast */}
           <div className="flex flex-col gap-2">
               <h2 className="text-gray-800 font-bold text-xl lg:text-2xl">Cast</h2>
               <CastSlider className="w-full h-full mx-auto" images={CastImages}  title={props.title} subTitle={props.subTitle}/>
           </div>
           <div className="my-8">
               <hr/>
           </div>
           <button onClick={launchRazorPay} className="text-md font-semibold mt-1 py-3 px-14 text-white bg-btColor-400 rounded-lg">Book tickets</button>
       </div>
        </>
    );
};

export default Movie;