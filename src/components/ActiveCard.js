import React from 'react'
import '../styles/index.scss'

const ActiveCard = (props) => {
	return (
		<div id="ActiveCard" className="card-helper" onClick={() => window.open(`${props.html_url}`, "_blank")}>
			<p className="card-title">{props.name}</p>
			<p className="card-text">{props.language}</p>
			<p className="card-text">{props.id}</p>
			<p className="card-text">{props.size}kb</p>
			<p className="card-text">{props.description}</p>
		</div>
	)
}

export default ActiveCard
