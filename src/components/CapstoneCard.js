import React from 'react';


const CapstoneCard = (props) => {
	return (
		<article id="CapstoneCard" className="card-helper" onClick={() => window.open(`${props.html_url}`, "_blank")}>
			<section className="ui relaxed two column grid">
				<div className="column">
					<p className="card-title">{props.owner.login}</p>
					<p className="card-title">{props.name}</p>
					<p className="card-text">{props.language}</p>
					<p className="card-text">{props.id}</p>
					<p className="card-text">{props.size}kb</p>
				</div>
				<div className="column">
					<p className="card-text">{props.description}</p>
				</div>
			</section>
		</article>
	)
}

export default CapstoneCard
