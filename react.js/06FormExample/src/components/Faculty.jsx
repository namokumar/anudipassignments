import React, { useState } from "react";
import FacultyInput from "./FacultyInput";
import FacultyDisplay from "./FacultyDisplay";

function Faculty() {
	// states
	const [facultyName, setFacultyName] = useState("");
	const [age, setAge] = useState("");
	const [qualification, setQualification] = useState("");

	return (
		<div style={{ padding: "20px" }}>
			<h2>Faculty Form</h2>

			{/* input section */}
			<FacultyInput
				facultyName={facultyName}
				setFacultyName={setFacultyName}
				age={age}
				setAge={setAge}
				qualification={qualification}
				setQualification={setQualification}
			/>

			<hr />

			{/* display section */}
			<FacultyDisplay
				facultyName={facultyName}
				age={age}
				qualification={qualification}
			/>
		</div>
	);
}

export default Faculty;
