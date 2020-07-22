import React, { useState, useEffect } from 'react';
import styles from '../styles/project.module.scss';

export default function Project(props) {
	const { data } = props;

	const [show, setShow] = useState(false);

	const root = {
		backgroundColor: data.background,
		color: data.color,
	};

	useEffect(() => {}, [show]);

	return (
		<div
			role="button"
			tabIndex={0}
			className={styles.project}
			style={root}
			onClick={() => setShow(!show)}
			onKeydown={() => setShow(!show)}
		>
			<h3>{data.title}</h3>
			<p>{data.role}</p>
			{data.tech.map((item, index) => (
				<i
					className={`fab fa-md ${styles.techItem} ${item}`}
					key={index}
				/>
			))}

			<div className={show ? styles.showContent : styles.hiddenContent}>
				<h4>Description</h4>
				<p>{data.description}</p>
				<h4>Responsibilities</h4>
				<ul>
					{data.responsibilities.map((responsibility, index) => (
						<li key={index}>
							<p>{responsibility}</p>
						</li>
					))}
				</ul>
				<h4>Details</h4>
				<ul>
					{data.details.map((detail, index) => (
						<li key={index}>
							<p>{detail}</p>
						</li>
					))}
				</ul>
			</div>
			<div className={styles.buttonGroup}>
				{data.visitedUrl ? (
					<a href={data.visitedUrl}>Visit</a>
				) : (
					<div>In Development</div>
				)}
				<a href={data.githubUrl} target="_blank" rel="noreferrer">
					<i className="fab fa-github fa-md" />
					Github
				</a>
			</div>
		</div>
	);
}
