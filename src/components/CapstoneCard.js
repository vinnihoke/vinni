import React from 'react';
import '../styles/index.scss'
import { Row, Col } from 'antd'


const CapstoneCard = (props) => {
	return (
		<div id="CapstoneCard" className="card-helper" onClick={() => window.open(`${props.html_url}`, "_blank")}>
			<Row align="middle">
				<Col span={8}>
					<p className="card-title">{props.owner.login}</p>
					<p className="card-title">{props.name}</p>
					<p className="card-text">{props.language}</p>
					<p className="card-text">{props.id}</p>
					<p className="card-text">{props.size}kb</p>
				</Col>
				<Col span={16}>
					<p className="card-text">{props.description}</p>
				</Col>
			</Row>
		</div>
	)
}

export default CapstoneCard
