import React from "react";

//components
import MovieNavbar from "../Components/Navbar/MovieNavbar.component";

const MovieLayout = (props) => {
    return (
        <>
        <MovieNavbar/>
        {props.children}
        </>
    )
};

export default MovieLayout;

