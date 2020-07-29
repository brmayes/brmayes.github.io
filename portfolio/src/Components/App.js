import React from "react";
import "../scss/App.scss";
import { slugify } from "./_utils.js";
import * as metadata from "./_metadata.js";
const data = require("../data/projects.json");

function App() {
	function makeProject(post) {
		return (
			<div className="post" key={slugify(post.title)}>
				<a className="headline-link" href={post.url}>
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

	return (
		<div className="flex-container">
			<div class="flex-item sidebar">
				<img
					class="profile-picture"
					alt={metadata.title}
					src={"./img/" + metadata.profilePicture}
				/>
				<a href="/">
					<h1 class="headline">
						{metadata.title}&nbsp;
						<i class="em em-sunflower"></i>
					</h1>
				</a>
				<div class="nav links">
					<a href={metadata.baseurl + "/"}>Work</a>
					<a href={metadata.baseurl + "/about/"}>About</a>
				</div>
				<div class="nav social">
					<a href="http://twitter.com/BritRenee_" target="_blank">
						<i class="ion-social-twitter"></i>
					</a>
					<a
						href="https://www.washingtonpost.com/people/brittany-renee-mayes/"
						target="_blank"
					>
						<i class="ion-ios-briefcase"></i>
					</a>
					<a href="http://github.com/brmayes" target="_blank">
						<i class="ion-social-github"></i>
					</a>
					<a
						href="mailto:brittany.mayes@washpost.com"
						target="_blank"
					>
						<i class="ion-paper-airplane"></i>
					</a>
				</div>
			</div>
			<div className="flex-item main">
				<div className="post-container">{projects}</div>
			</div>
		</div>
	);
}

export default App;
