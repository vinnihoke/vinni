import React from 'react';
import { Helmet } from 'react-helmet';
import '../styles/components/pressed.scss';

export default function Pressed() {
	return (
		<main className="root">
			<Helmet>
				<title>Vinni Hoke - Full-Stack Engineer</title>
				<script
					src="https://kit.fontawesome.com/438cae8cec.js"
					crossOrigin="anonymous"
				/>
			</Helmet>
			<div className="top">
				<div className="info">
					<a href="/">
						<i className="fas fa-arrow-circle-left fa-lg" />
					</a>

					<h3>Pressed Juicery</h3>
					<div>
						<i className="fab fa-js fa-lg" />
						<i className="fab fa-vuejs fa-lg" />
						<i className="fab fa-sass fa-lg" />
						<i className="fab fa-html5 fa-lg" />
					</div>
					<div>
						Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Nihil quis praesentium laudantium obcaecati neque
						explicabo consectetur enim, rerum officia labore omnis
						ad, doloremque sit blanditiis!
					</div>
				</div>
			</div>
			<div className="image" />
		</main>
	);
}
