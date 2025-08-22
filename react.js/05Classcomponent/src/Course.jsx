import React from "react";

// Creating class component
class Course extends React.Component {
  // Defining render method to produce component output
  render() {
    // Destructuring of the props
    const { name, duration, details } = this.props;
    return (
      <div>
        <h1>Course Component</h1>
        <h2>Name Of Course: {name}</h2>
        <h2>Duration Of Course: {duration}</h2>
        <h2>Details: {details}</h2>
      </div>
    );
  }
}
export default Course;
