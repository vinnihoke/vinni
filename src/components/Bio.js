import React from 'react'
import "../styles/index.scss"
import { Popup } from 'semantic-ui-react'

const Bio = () => {
	return (
		<section id="Bio">
			<Popup trigger={<h1>Vinni Hoke</h1>} content="Portfolio still in development, thanks for visiting!" basic />
			<a href="https://jumpstart.me/profile/vinni-hoke" target="_blank"><span className="ui green label">Accepting Offers</span></a>
			<h3>👋 Hello there! Connect with me on <a href="https://twitter.com/ccvinni">Twitter</a> or <a href="https://www.linkedin.com/in/vinnihoke/">LinkedIn</a>.</h3>
			<div className="ui inverted segment">
				<div role="list" className="ui divided inverted relaxed list">
					<div role="listitem" className="item">
						<div className="content">
							<div className="header">Current Role</div>
							Fully remote Lambda School Team Lead.
						</div>
					</div>
					<div role="listitem" className="item">
						<div className="content">
							<div className="header">Core Technologies</div>
							HTML/SCSS, JavaScript, React, Node, SQL.
						</div>
					</div>
					<div role="listitem" className="item">
						<div className="content">
							<div className="header">Previous Experience</div>
							Business administration with an emphasis in process management. Previous design experience.
						</div>
					</div>
					<div role="listitem" className="item">
						<div className="content">
							<div className="header">Looking For</div>
							Full-stack, front-end, or QA. Interested in internships, and full-time roles.
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Bio
