import React from "react";
import { slugify } from "./_utils.js";

const Sidebar = (props) => {
	const { data } = props;

	function makeProject(post) {
		return (
			<div className="post" key={slugify(post.title)}>
				<a
					className="headline-link"
					href={post.url}
					target="_blank"
					rel="noopener noreferrer"
				>
					<h3>{post.title}</h3>
				</a>
				<div className="img-wrapper">
					<img
						alt={post.title}
						src={
							post.img.includes("http")
								? post.img
								: "./img/thumbnails/" + post.img
						}
					/>
				</div>
				<div className="meta-wrapper">
					<p className="description">{post.date}</p>
					<p className="description">{post.role}</p>
					<p className="description">{post.desc}</p>
				</div>
			</div>
		);
	}

	const projects = data.map((d) => makeProject(d));

	return <div className="post-container">{projects}</div>;
};

export default Sidebar;
