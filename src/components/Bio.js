import React from 'react'
import "../styles/index.scss"
import { Tag, Tooltip } from "antd"

const Bio = () => {
	return (
		<section id="Bio">
			<Tooltip placement="left" title="Portfolio is still in development. Thanks for visiting!">
				<h1>Vinni Hoke</h1>
			</Tooltip>
			<a href="https://www.linkedin.com/in/vinnihoke/" target="_blank"><Tag color="#87d068">Accepting Offers</Tag></a>
			<h3></h3>
			<p>Current fully remote Lambda School Team Lead. Technologies include HTML/CSS, JavaScript, SCSS, React, Svelte, Gatsby, Express, Knex, Sqlite. Currently learning GraphQL, and Python. Business administration knowledge with an emphasis in process management. Previous design experience.</p>
		</section>
	)
}

export default Bio
