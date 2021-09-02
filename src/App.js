// eslint-disable-next-line 
import { BrowserRouter, Route } from "react-router-dom";
import './App.css'

// HOC 
import DefaultHOC from "./HOC/Default.HOC";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Components
// import EntertainmentcardSlider from "./Components/Entertainment/Entertainment.component";

// Pages
import HomePage from "./Pages/Home.page";


function App() {
  return (
    <>
    <DefaultHOC path="/" exact component={HomePage}/>
    </>  
);
}

// const Pranay = {
//   name : "Pranay",
//   dob : 23
// };

// const student = {...Pranay, male:true};



export default App;
