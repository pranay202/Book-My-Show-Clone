import React, {useState, useEffect} from "react";

const User = (props) => {
  //value
  //the function to update the state
  const [planet, setPlanet] = useState("earth");

//componentDidMount
  useEffect(() => {
    //heavy computation
    console.log("Component Mounting");
  }, []);


//componentDidUpdate
useEffect(() => {
  console.log("Planet Changes");
},[planet]);


  console.log(planet);
    return (
      <div>
       <h1>{props.name}</h1>
       <p>{props.description}</p>
       <button onClick={() => setPlanet("Pluto")}>{planet}</button>
      </div>
    );

}
//State -> A set of data that an individual component holds.
export default User;

