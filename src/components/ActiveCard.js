import React from 'react';
import '../styles/index.scss';

export default function ActiveCard(props) {
	const openWindow = () => {
		window.open(`${props.html_url}`, '_blank');
	};

	return (
		<div
			className="activeCard"
			role="button"
			tabIndex={0}
			onClick={openWindow}
			onKeyDown={openWindow}
		>
			<h4>{props.name}</h4>
			<p className="card-text">{props.language}</p>
			<p className="card-text">{props.id}</p>
			<p className="card-text">{props.size}kb</p>
			<p className="card-text">{props.description}</p>
		</div>
	);
}
