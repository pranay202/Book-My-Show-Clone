import React from "react";
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io";

export const PrevArrow = (props) => {
  return (
    <>
      <div
      className=""
        style={{
          ...props.style,
          fontSize: "40px", display: 'block', left:"-3px", top: "160px",zIndex:"15", height:"40px", width:"40px", opacity:"0.55", color:"white", backgroundColor:"black", position:"absolute", borderRadius: "4px", paddingLeft:"4px"
        }}
        onClick={props.onClick}
      >
      <span className="icon IoIosArrowBack"><IoIosArrowBack/></span>
      </div>
    </>
  );
};

export const NextArrow = (props) => {
  return (
    <>
      <div
         className=""
        style={{
          ...props.style,
          fontSize: "40px", display: 'block', right:"-2px", top: "160px",zIndex:"15", height:"40px", width:"40px", opacity:"0.55", color:"white", backgroundColor:"black", position:"absolute", borderRadius: "4px", paddingRight:"5px"
        }}
        onClick={props.onClick}
      >
      <span className="icon IoIosArrowBack"><IoIosArrowForward/></span>
      </div>
    </>
  );
};


export const PrevArrowSm = (props) => {
  return (
    <>
      <div
      className=""
        style={{
          ...props.style,
          fontSize: "30px", display: 'block', left:"-2px", top: "145px",zIndex:"15", height:"40px", width:"40px", opacity:"0.9", color:"white", backgroundColor:"#393E46", position:"absolute", borderRadius: "50%" , padding: "4px 3px"
        }}
        onClick={props.onClick}
      >
      <span className="icon IoIosArrowBack"><IoIosArrowBack/></span>
      </div>
    </>
  );
};

export const NextArrowSm = (props) => {
  return (
    <>
      <div
         className=""
        style={{
          ...props.style,
          fontSize: "30px", display: 'block', right:"-3px", top: "145px",zIndex:"15", height:"40px", width:"40px", opacity:"0.9", color:"white", backgroundColor:"#393E46", position:"absolute", borderRadius: "50%", padding: "4px 5px"
        }}
        onClick={props.onClick}
      >
      <span className="icon IoIosArrowBack"><IoIosArrowForward/></span>
      </div>
    </>
  );
};



// smallest poster
export const PrevArrowSmallest = (props) => {
  return (
    <>
      <div
      className=""
        style={{
          ...props.style,
          fontSize: "25px", display: 'block', left:"-3px", top: "100px",zIndex:"15", height:"40px", width:"40px", opacity:"0.9", color:"white", backgroundColor:"#393E46", position:"absolute", borderRadius: "50%" , padding: "6.5px 5px"
        }}
        onClick={props.onClick}
      >
      <span className="icon IoIosArrowBack"><IoIosArrowBack/></span>
      </div>
    </>
  );
};

export const NextArrowSmallest = (props) => {
  return (
    <>
      <div
         className=""
        style={{
          ...props.style,
          fontSize: "25px", display: 'block', right:"-3px", top: "100px",zIndex:"15", height:"40px", width:"40px", opacity:"0.9", color:"white", backgroundColor:"#393E46", position:"absolute", borderRadius: "50%", padding: "6.5px 9px"
        }}
        onClick={props.onClick}
      >
      <span className="icon IoIosArrowBack"><IoIosArrowForward/></span>
      </div>
    </>
  );
};
