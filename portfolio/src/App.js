import React from "react";
import Sidebar from "./Components/Sidebar";
import Posts from "./Components/Posts";
import "./scss/App.scss";

const data = require("./data/projects.json");

function App() {
	const filteredData = data.filter((d) => d.include === "TRUE");

	return (
		<div className="flex-container">
			<Sidebar />
			<Posts data={filteredData} />
		</div>
	);
}

export default App;
