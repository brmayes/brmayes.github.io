import React from "react";
import Posts from "./Posts";
import About from "./About";

const data = require("../data/projects.json");

const Content = (props) => {
	const { contentType } = props;

	const filteredData = data.filter((d) => d.include === "TRUE");

	return (
		<div className="flex-item main">
			{contentType === "work" ? <Posts data={filteredData} /> : <About />}
		</div>
	);
};

export default Content;
