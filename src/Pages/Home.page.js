import React,{useState , useEffect} from 'react';
import axios from 'axios';

// Components
import EntertainmentCardSlider from "../Components/Entertainment/Entertainment.component";
import PosterSlider, { PosterSliderBg } from "../Components/PosterSlider/PosterSlider.component";

//config 
import {StreamingImages , PremierImages } from "../config/TempPosters.config";
import TempPosters from '../config/TempPosters.config';

const HomePage = () => {

const [popularMovies, setPopularMovies] = useState([]);
useEffect(() => {
  const requestPopularMovies = async() => {
    const getPopularMovies = await axios.get("/movie/popular");
    setPopularMovies(getPopularMovies.data.results);
  };
  requestPopularMovies();
}, []);


// const [RecommendedMovies, setRecommendedMovies] = useState([]);
// useEffect(() => {
//   const requestRecommendedMovies = async() => {
//     const getRecommendedMovies = await axios.get(`/movie/{movie_id}/recommendations`);
  //  setRecommendedMovies(getRecommendedMovies.data.results);
//     console.log(getRecommendedMovies);
//   };
//   requestRecommendedMovies();
// }, []);


    return (
        <>
        <div className="flex flex-col py-14 gap-7 md:px-8 bg-gray-100 lg:px-14">

        <div className="container mx-auto px-12">
        <PosterSlider
          images={PremierImages}
          title="Recommended Movies"
          isDark={false}
        />
        </div>

        <div className="container mx-auto md:px-8 lg:px-14">
            <h1 className="lg:text-2xl my-3 mx-5 py-2 font-bold text-gray-700">
               The Best of the Entertainment
            </h1>
        <EntertainmentCardSlider/>
        </div>
       </div>

        <div className="bg-navLgColor-100 flex flex-col gap-7 py-8 md:px-8 lg:px-14">

            <div className="container mx-auto px-8 lg:px-14 text-gray-300">
            <div className="flex mb-12">
            <img
            src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
            alt="Premier"
            className="w-full h-full mx-auto"
            />
            </div>
                <PosterSliderBg className="w-full h-full mx-auto" images={popularMovies} title="Premiers" subtitle="Brand new releases every Friday" isDark="true" />
            </div>
        </div>
         {/* above here, you can use Temp posters which is your local data. */}
        <div className="flex flex-col my-14 gap-7 md:px-8 lg:px-14">
      <div className="container mx-auto px-12">
        <PosterSlider
          images={StreamingImages}
          title="Online Streaming Events"
          isDark={false}
        />
      </div>
      </div>
       </>
    );
};

export default HomePage;