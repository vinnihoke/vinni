import React from 'react';
import Portfolio from './Portfolio';
import '../styles/components/bio.scss';

export default function Bio() {
	return (
		<div className="bio">
			<div className="introduction">
				<div className="intro">
					<h2 className="title">Vinni Hoke</h2>
					<h4>Full Stack Engineer</h4>
				</div>
				<p className="statement">
					👋 My name is Vinni. I'm a Full Stack Engineer engineer who
					loves using technology to solve complex challenges at scale.
					Looking to impact a cross-functional, diversified team with
					my unique skillset and background.
				</p>
			</div>
			<div className="greyWrapper">
				<div className="technologies">
					<h3>Core Technologies</h3>
					<div className="fourgroup">
						<i className="fab fa-js fa-5x" />
						<i className="fab fa-python fa-5x" />
						<i className="fab fa-react fa-5x" />
						<i className="fab fa-vuejs fa-5x" />
						<i className="fab fa-node-js fa-5x" />
						<i className="fab fa-sass fa-5x" />
						<i className="fab fa-html5 fa-5x" />
						<i className="fab fa-css3 fa-5x" />
					</div>
					<p>Other Skills</p>
					<ul className="otherSkills">
						<li>Jest</li>
						<li>SQL</li>
						<li>Postgres</li>
						<li>Software Architecture</li>
						<li>Remote Collaboration</li>
						<li>Design Experience</li>
						<li>Agile Methodology</li>
						<li>Customer Support</li>
					</ul>
				</div>
			</div>
			<div className="projects">
				<h3>Professional Experience</h3>
				<a href="/pressed">
					<div className="pressed project">
						<h3>Pressed Juicery</h3>
						<p>Full Stack Engineer</p>
						<i className="fab fa-js fa-md" />
						<i className="fab fa-vuejs fa-md" />
						<i className="fab fa-sass fa-md" />
						<i className="fab fa-html5 fa-md" />
						<i className="fab fa-css3 fa-md" />
					</div>
				</a>
				<a
					href="https://wellsupholstery.now.sh/"
					target="_blank"
					rel="noreferrer"
				>
					<div className="wells project">
						<h3>Wells Upholstery</h3>
						<p>Acting CTO</p>
						<i className="fab fa-js fa-md" />
						<i className="fab fa-react fa-md" />
						<i className="fab fa-sass fa-md" />
						<i className="fab fa-html5 fa-md" />
					</div>
				</a>

				<a
					href="https://time-blocking-tool.now.sh/"
					target="_blank"
					rel="noreferrer"
				>
					<div className="time project">
						<h3>Time Blocking Tool</h3>
						<p>Personal Project</p>
						<i className="fab fa-js fa-md" />
						<i className="fab fa-react fa-md" />
						<i className="fab fa-sass fa-md" />
						<i className="fab fa-html5 fa-md" />
						<i className="fab fa-node-js fa-md" />
					</div>
				</a>
				<a
					href="https://www.npmjs.com/package/purecrypt"
					target="_blank"
					rel="noreferrer"
				>
					<div className="purecrypt project">
						<h3>Purecrypt</h3>
						<p>Package Author</p>
						<i className="fab fa-js fa-md" />
						<i className="fab fa-node-js fa-md" />
					</div>
				</a>
			</div>
			{/*
			<div className="portfolio">
				<Portfolio />
			</div>
			*/}
		</div>
	);
}
