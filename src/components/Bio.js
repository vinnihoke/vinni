import React from 'react'
import "../styles/index.scss"
import { Popup } from 'semantic-ui-react'

const Bio = () => {
	return (
		<section id="Bio">
			<Popup trigger={<h1>Vinni Hoke</h1>} content="Portfolio still in development, thanks for visiting!" basic />
			<a href="https://www.linkedin.com/in/vinnihoke/" target="_blank"><span className="ui green label">Accepting Offers</span></a>
			<h3>👋 Hello there! Connect with me on <a href="https://twitter.com/ccvinni">Twitter</a> or <a href="https://www.linkedin.com/in/vinnihoke/">LinkedIn</a>.</h3>
			<div class="ui inverted segment">
				<div role="list" class="ui divided inverted relaxed list">
					<div role="listitem" class="item">
						<div class="content">
							<div class="header">Current Role</div>
							Fully remote Lambda School Team Lead.
						</div>
					</div>
					<div role="listitem" class="item">
						<div class="content">
							<div class="header">Core Technologies</div>
							HTML/SCSS, JavaScript, React.
						</div>
					</div>
					<div role="listitem" class="item">
						<div class="content">
							<div class="header">Previous Experience</div>
							Business administration with an emphasis in process management. Previous design experience.
						</div>
					</div>
					<div role="listitem" class="item">
						<div class="content">
							<div class="header">Looking For</div>
							Full-stack, front-end, or QA roles. Interested in internships, and full-time roles.
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Bio
