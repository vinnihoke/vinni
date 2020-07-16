import React from 'react';

export default function CapstoneCard(props) {
	const openWindow = () => {
		window.open(`${props.html_url}`, '_blank');
	};

	return (
		<div
			className="capstoneCard"
			role="button"
			tabIndex={0}
			onClick={openWindow}
			onKeyDown={openWindow}
		>
			<section>
				<div>
					<h3>{props.name}</h3>
					<h4>{props.owner.login}</h4>
					<p className="card-text">{props.language}</p>
					<p className="card-text">{props.id}</p>
					<p className="card-text">{props.size}kb</p>
				</div>
				<div>
					<p className="card-text">{props.description}</p>
				</div>
			</section>
		</div>
	);
}
