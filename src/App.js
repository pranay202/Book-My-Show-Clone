
import { Route } from "react-router-dom";
import './App.css';

//axios 
import axios from "axios";

// HOC 
import DefaultHOC from "./HOC/Default.HOC";
import MovieHOC from "./HOC/Movie.HOC";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Components
// import EntertainmentcardSlider from "./Components/Entertainment/Entertainment.component";

// Pages
import HomePage from "./Pages/Home.page";
import Movie from "./Pages/Movie.page";
import Plays from "./Pages/Plays.page";
// import MovieHero from "./Components/MovieHero/MovieHero.component";

// axios default settings
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;


function App() {
  return (
    <>
    <DefaultHOC path="/" exact component={HomePage}/>
    <MovieHOC path="/movie/:id" exact component={Movie}/>
    <DefaultHOC path="/plays/:id" exact component={Plays}/>
    </>  
);
}

// const Pranay = {
//   name : "Pranay",
//   dob : 23
// };

// const student = {...Pranay, male:true};



export default App;
