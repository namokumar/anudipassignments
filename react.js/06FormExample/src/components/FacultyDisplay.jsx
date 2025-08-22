import React from "react";

function FacultyDisplay({ facultyName, age, qualification }) {
	return (
		<div>
			<h3>Entered Details</h3>
			<p>Name: {facultyName}</p>
			<p>Age: {age}</p>
			<p>Qualification: {qualification}</p>
		</div>
	);
}

export default FacultyDisplay;
