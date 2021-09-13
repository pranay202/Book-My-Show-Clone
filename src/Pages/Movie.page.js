import React from "react";

const Movie = () => {
    return (
        <>
        <div className="md:hidden">
            <img src="https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/bell-bottom-et00117102-14-08-2021-04-33-35.jpg" />
        </div>
        <div className="hidden md:block lg:hidden">
            <img src="https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/bell-bottom-et00117102-14-08-2021-04-33-35.jpg" />
        </div>
        <div className="relative hidden lg:block">
            <img src="https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/bell-bottom-et00117102-14-08-2021-04-33-35.jpg" />
        </div>
        </>
    );
};

export default Movie;