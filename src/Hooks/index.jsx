import React, { useState } from "react";

export default () => {
	const [name, setName] = useState();
	const handleNameChange = e => setName(e.target.value);
	return (
		<div className="App">
			<h1>Testing hooks</h1>
			<input name="name" onChange={handleNameChange} value={name} />
			<h4>{name}</h4>
		</div>
	);
};
