import React from "react";

function FacultyInput({
	facultyName,
	setFacultyName,
	age,
	setAge,
	qualification,
	setQualification,
}) {
	return (
		<div>
			<div>
				<label>Faculty Name: </label>
				<input
					type="text"
					value={facultyName}
					onChange={(e) => setFacultyName(e.target.value)}
				/>
			</div>

			<div>
				<label>Age: </label>
				<input
					type="number"
					value={age}
					onChange={(e) => setAge(e.target.value)}
				/>
			</div>

			<div>
				<label>Qualification: </label>
				<input
					type="text"
					value={qualification}
					onChange={(e) => setQualification(e.target.value)}
				/>
			</div>
		</div>
	);
}

export default FacultyInput;
