import React from 'react'
import Course from './Course'

// Creating class component
class Faculty extends React.Component {
    // Defining render method to produce component output
    render() {
        return (
            <div>
                <h1>Faculty Details</h1>
                <h2>Faculty Name: {this.props.name}</h2>
                <h2>Course: {this.props.course}</h2>
                <h2>Duration: {this.props.duration} Days</h2>
                <p>Course Details: </p>
                <Course name={this.props.course} duration={this.props.duration} details="Web Development With React!" />
            </div>
        )
    }
}
export default Faculty;