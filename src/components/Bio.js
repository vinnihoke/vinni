import React from 'react';
import Portfolio from './Portfolio';
import '../styles/components/bio.scss';

export default function Bio() {
	return (
		<div className="bio">
			<div className="introduction">
				<div className="title">
					<h2>Vinni Hoke</h2>
					<h4>Full Stack Engineer</h4>
				</div>
				<p className="intro">
					👋 My name is Vinni. I'm a Full Stack Engineer engineer who
					loves using technology to solve complex challenges at scale.
					Looking to impact a cross-functional, diversified team with
					my unique skillset and background.
				</p>
			</div>
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
				<h3>Other Skills</h3>
				<div className="fourgroup">
					<p>SQL/Sqlite3/Postgres</p>
					<p>Mac/Linux</p>
					<p>Jest</p>
					<p>Software Architecture</p>
					<p>Design Experience</p>
					<p>Remote Collaboration</p>
					<p>Agile Methodology</p>
					<p>Customer Support</p>
				</div>
			</div>
			<div className="portfolio">
				<Portfolio />
			</div>
		</div>
	);
}
