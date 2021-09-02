import React from "react";

//Components
import Navbar from "../Components/Navbar/Navbar.component";
import HeroSlider from "../Components/HeroCorousal/HeroCorousal.component";

const DefaultLayout = (props) => {
  return (
    <>
    <Navbar />
    <HeroSlider />
    {props.children}
    </>
  );
};

export default DefaultLayout;