import React from 'react'

// Functional Component
function Student(props) {
    return (
        <div>
            <h1>Student Component</h1>
            <h2>Name Of Student: {props.stdname}</h2>
            <h2>Age Of student: {props.age} Year</h2>
            <h2>Standard Of The Student: {props.standard}</h2>
        </div>
    )
}

//class
export default Student