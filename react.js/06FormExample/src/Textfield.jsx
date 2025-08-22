import React from "react";
function Textfield() {
    // Creating a function component to use a state variable in Form Element.
    return (
        <div>
            <h2>Text Field Example</h2>
            <p>Student name: <input type="text" id="sname" name="stdname" value="" placeholder="Enter the name of student" /></p>
            <p>Name of Student: </p>
        </div>
    )
}

export default Textfield;