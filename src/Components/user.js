import React from "react";
import React,{useState , useEffect} from "react"; 

class User extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      planet: "earth"
    };
    console.log("Hey I am from constructor");
  }

componentDidMount() {
  this.setState({planet: "Jupiter"});
  console.log("Hey I am from componentDidMount");
}

shouldComponentUpdate(nextProp, nextState) {
  console.log("I am  from shouldComponentUpdate");
  console.log({
    nextProp,
    nextState
  });
  return true;
}

getSnapshotBeforeUpdate(prevProp, prevState) {
  console.log("I am from getSnapshotBeforeUpdate");
  console.log({
    prevProp,
    prevState
  });
  return true;
}

componentDidUpdate() {
  console.log(this.state);
}


  render() {//logic
    console.log("Hey I am from rendered");
    return (
      <div>
       <h1>{this.props.name}</h1>
       <p>{this.props.description}</p>
       <h4>{this.state.planet}</h4>
      </div>
    );
  }

}
//State -> A set of data that an individual component holds.
export default User;

//LIFE CYCLE METHODS
//1.MOUNT -> The component is initially rendered in a DOM
//1.a.Constructor -, 1.b.Render  , 1.c.componentDidMount -sideeffects (get exlore repos, activities, links)
//2.UPDATE -> Component is being updated
//2.a.Constructor
//2.b.shouldComponentUpdate(nextProp, nextState) -> true or false
//2.c.render()
//2.d.getSnapshotBeforeUpdate(prevProp, prevState) -> true or false
//2.e.componentDidUpdate()
//3.UNMOUNT -> Component is removed from the DOM


