import React from 'react';
import styles from '../styles/components/footer.module.scss';

export default function Footer() {
	return (
		<div className={styles.root}>
			<div className={styles.content}>
				<h3>Let's work together!</h3>
				<div className={styles.buttonGroup}>
					<a
						className={styles.button}
						href="https://github.com/vinnihoke"
						target="_blank"
						rel="noreferrer"
					>
						<i className="fab fa-github fa-md" />
						Github
					</a>
					<a
						className={styles.button}
						href="https://www.linkedin.com/in/vinnihoke/"
						target="_blank"
						rel="noreferrer"
					>
						<i className="fab fa-linkedin fa-md" />
						LinkedIn
					</a>
					<a
						className={styles.button}
						href="mailto:vinni.hoke@gmail.com"
						target="_blank"
						rel="noreferrer"
					>
						<i className="fas fa-envelope" />
						Email
					</a>
				</div>
			</div>
		</div>
	);
}
