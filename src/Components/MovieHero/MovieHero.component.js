import React from "react";
import { BiChevronRight } from "react-icons/bi";
import {FcLike} from "react-icons/fc";

const launchRazorpay = () => {
    let options = {
        key: "rzp_test_VHws7fEZvdkwI4",
        amount: 100,
        currency: "USD",
        name: "Book My Show",
        description: "Movie purchase on rental",
        image: "https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png",
        handler: () => {
            alert("Payment Done!");
        },
        theme: {color: "#c4242d"}
    };
    let rzp =new window.Razorpay(options);
    rzp.open();
};

export const MovieHero = () => {
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
            <div className="flex items-center absolute z-30 left-32 top-16">
            <div className="">
                <img src="https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/chehre-et00102880-25-08-2021-07-26-46.jpg" 
                alt="poster"
                className="w-4/5 h-5/6 rounded-xl"
                />   
            </div>
           <div className="flex flex-col items-start gap-4 z-70">
               <h1 className="text-5xl font-bold text-white">Chehre</h1>
               <div className="flex flex-row gap-2">
               <FcLike className="w-1/6 h-1/5 text-xl"/>
               <span className="text-xl text-white font-bold">66%</span>
               <p className="text-gray-100">12.7K ratings</p>
               <div className="text-gray-100">
               <BiChevronRight className="w-full h-full left-0" />
               </div>
               </div>
               <div className="bg-navLgColor-600 p-2 px-4 flex justify-between gap-20 rounded-lg">
               <div className="flex flex-col items-start">
                <p className="text-lg font-semibold text-white"> Add your rating and review</p>
                <span className="text-gray-400">Your ratings matter</span>
               </div>
               <button className="text-lg font-semibold mt-1 py-2 h-1/2 px-3 text-gray-800 bg-gray-50 rounded-lg">Rate now</button>
               </div>
               <div className="flex gap-2">
               <button className="font-semibold px-2 text-black bg-gray-50 rounded-sm">2D</button>
               <button className="font-semibold px-2 text-black bg-gray-50 rounded-sm">Hindi</button>
               </div>
               <div className="flex gap-2">
                <span className="text-white ">2h 19m •</span>
                <span className="text-white hover:underline"> Mystery,</span> 
                <span className="text-white hover:underline">Thriller</span>
                <span className="text-white ">• &nbsp; UA</span> 
                <span className="text-white ">• &nbsp; 27 August, 2021</span> 
               </div>
               <button onClick={launchRazorpay} className="text-md font-semibold mt-1 py-3 px-14 text-white bg-btColor-400 rounded-lg">Book tickets</button>
           </div> 
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