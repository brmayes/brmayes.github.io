import React from "react";

const About = (props) => {
	// const { data } = props;

	return (
		<div class="about">
			<p class="about-intro">Hi there, I'm Brittany.</p>

			<p>
				I'm a <strong>graphics reporter</strong> at the{" "}
				<strong>Washington Post</strong>. I am also an adjunct professor
				at <strong>The University of Maryland, College Park</strong>. I
				was raised by NPR Visuals, and I'm an alumna of the beautiful
				University of North Carolina at Chapel Hill.
			</p>

			<p>
				Recently, I've been thinking about: Processes, aspirational
				skills, fostering collaboration, hiring and organizational
				hierarchy. Talk to me about any of these!
			</p>

			<p>
				If you'd like, you can take a look at my{" "}
				<a href="/img/MayesResume.pdf">resume</a>.
			</p>

			<h3>Skills</h3>
			<ul>
				<li>HTML and CSS</li>
				<li>Less and Sass</li>
				<li>JavaScript and jQuery</li>
				<li>D3.js</li>
				<li>Python</li>
				<li>Data analysis</li>
				<li>Jupyter Notebook and Pandas</li>
				<li>QGIS</li>
				<li>Illustrator and Photoshop</li>
				<li>Git version control</li>
			</ul>

			<h3>Community Involvement</h3>
			<ul>
				<li>Press Pass Mentorship Program</li>
				<li>Girls Who Code</li>
				<li>Investigative Reporters and Editors</li>
				<li>National Association of Black Journalists</li>
				<li>NICAR Minority Fellowship Program</li>
				<li>Online News Association Student Newsroom Mentor</li>
				<li>ProPublica's Diversity Mentorship Program</li>
			</ul>

			<h3>Awards and Recognition</h3>
			<ul>
				<li>2018 DCFemTech Award, Data</li>
				<li>
					2016 Stuart Sechriest Award for Outstanding Graduating
					Senior, Visual Communication
				</li>
				<li>
					2016 Excellence and Innovation in Visual Digital
					Storytelling, Online Journalism Awards
				</li>
			</ul>

			<p>That was a little about me. I'd love to hear from you.</p>
		</div>
	);
};

export default About;
