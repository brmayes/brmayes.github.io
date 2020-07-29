import React, { useState } from "react";
import Sidebar from "./Components/Sidebar";
import Content from "./Components/Content";
import "./scss/App.scss";

function App() {
	const [contentType, setContentType] = useState("work");
	return (
		<div className="flex-container">
			<Sidebar setContentType={setContentType} />
			<Content contentType={contentType} />
		</div>
	);
}

export default App;
