import React from "react";
import * as metadata from "./_metadata.js";

const Sidebar = (props) => {
	const { setContentType } = props;

	return (
		<div className="flex-item sidebar">
			<img
				className="profile-picture"
				alt={metadata.title}
				src={"../img/" + metadata.profilePicture}
			/>
			<h1 className="headline">
				{metadata.title}&nbsp;
				<i className="em em-sunflower"></i>
			</h1>
			<div className="nav links">
				<a href="#" onClick={() => setContentType("work")}>
					Work
				</a>
				<a href="#" onClick={() => setContentType("about")}>
					About
				</a>
			</div>
			<div className="nav social">
				<a href="http://twitter.com/BritRenee_" target="_blank">
					<i className="ion-social-twitter"></i>
				</a>
				<a
					href="https://www.washingtonpost.com/people/brittany-renee-mayes/"
					target="_blank"
				>
					<i className="ion-ios-briefcase"></i>
				</a>
				<a href="http://github.com/brmayes" target="_blank">
					<i className="ion-social-github"></i>
				</a>
				<a href="mailto:brittany.mayes@washpost.com" target="_blank">
					<i className="ion-paper-airplane"></i>
				</a>
			</div>
		</div>
	);
};

export default Sidebar;
