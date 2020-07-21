import React from 'react';
import { Helmet } from 'react-helmet';
import styles from '../styles/pressed.module.scss';

export default function Pressed() {
	return (
		<main className={styles.root}>
			<Helmet>
				<title>Vinni Hoke - Full Stack Engineer</title>
				<script
					src="https://kit.fontawesome.com/438cae8cec.js"
					crossOrigin="anonymous"
				/>
			</Helmet>
			<div className={styles.top}>
				<div className={styles.info}>
					<a href="/">
						<i className="fas fa-arrow-circle-left fa-lg" />
					</a>
					<h3>Pressed Juicery</h3>
					<div>
						<i className="fab fa-js fa-lg techItem" />
						<i className="fab fa-vuejs fa-lg techItem" />
						<i className="fab fa-sass fa-lg techItem" />
						<i className="fab fa-html5 fa-lg techItem" />
					</div>
					<div>
						The Pressed Juicery mobile app is still in development.
						Because of that I cannot share images or screen shots.
						An updated link will be added when available.
					</div>
				</div>
			</div>
			<div className={styles.image} />
		</main>
	);
}
