import React from 'react';
import styles from '../styles/tech.module.scss';

export default function Tech() {
	return (
		<div className={styles.greyWrapper}>
			<div className={styles.technologies}>
				<h3>Core Technologies</h3>
				<div className={styles.fourgroup}>
					<i className="fab fa-js fa-5x" />
					<i className="fab fa-python fa-5x" />
					<i className="fab fa-react fa-5x" />
					<i className="fab fa-vuejs fa-5x" />
					<i className="fab fa-node-js fa-5x" />
					<i className="fab fa-sass fa-5x" />
					<i className="fab fa-html5 fa-5x" />
					<i className="fab fa-css3 fa-5x" />
				</div>
				<p>Other Technologies/Skills</p>
				<ul className={styles.otherSkills}>
					<li>Jest</li>
					<li>Postgres</li>
					<li>Software Architecture</li>
					<li>Remote Collaboration</li>
					<li>Design Experience</li>
					<li>Agile Methodology</li>
				</ul>
			</div>
		</div>
	);
}
