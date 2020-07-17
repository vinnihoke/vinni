import React from 'react';
import Portfolio from './Portfolio';
import '../styles/components/bio.scss';

export default function Bio() {
	return (
		<div className="bio">
			<div className="introduction">
				<div className="intro">
					<h2 className="title">Vinni Hoke</h2>
					<h4>Full Stack Engineer</h4>
				</div>
				<p className="statement">
					👋 My name is Vinni. I'm a Full Stack Engineer engineer who
					loves using technology to solve complex challenges at scale.
					Looking to impact a cross-functional, diversified team with
					my unique skillset and background.
				</p>
			</div>
			<div className="greyWrapper">
				<div className="technologies">
					<h3>Core Technologies</h3>
					<div className="fourgroup">
						<i className="fab fa-js fa-5x" />
						<i className="fab fa-python fa-5x" />
						<i className="fab fa-react fa-5x" />
						<i className="fab fa-vuejs fa-5x" />
						<i className="fab fa-node-js fa-5x" />
						<i className="fab fa-sass fa-5x" />
						<i className="fab fa-html5 fa-5x" />
						<i className="fab fa-css3 fa-5x" />
					</div>
					<p>Other Technologies/Skills</p>
					<ul className="otherSkills">
						<li>Jest</li>
						<li>Postgres</li>
						<li>Software Architecture</li>
						<li>Remote Collaboration</li>
						<li>Design Experience</li>
						<li>Agile Methodology</li>
					</ul>
				</div>
			</div>
			<div className="projects">
				<h3>Professional Experience</h3>
				<div className="pressed project">
					<h3>Pressed Juicery</h3>
					<p>Full Stack Engineer</p>
					<i className="fab fa-js fa-md techItem" />
					<i className="fab fa-vuejs fa-md techItem" />
					<i className="fab fa-sass fa-md techItem" />
					<i className="fab fa-html5 fa-md techItem" />
					<i className="fab fa-css3 fa-md techItem" />

					<div className="hiddenContent">
						<h4>Description</h4>
						<p>
							To provide the best customer experience and create a
							rewards system that could be used in-store, Pressed
							Juicery started an internal development team to
							build a mobile app. Something akin to the Starbucks
							app.
						</p>
						<h4>What do I do?</h4>
						<p>
							Working as a full stack engineer I'm building out
							components and pages of the mobile app with Vue and
							GraphQL on the mobile web app, and Storybook for the
							component library.
						</p>
					</div>

					<div className="buttonGroup">
						<a href="/pressed" className="visitButton">
							Visit
						</a>
						<a
							className="githubButton"
							href="https://github.com/Pressed-Juicery"
							target="_blank"
							rel="noreferrer"
						>
							<i className="fab fa-github fa-md" />
							Github
						</a>
					</div>
				</div>
				<div className="wells project">
					<h3>Wells Upholstery</h3>
					<p>Acting CTO</p>
					<i className="fab fa-js fa-md techItem" />
					<i className="fab fa-react fa-md techItem" />
					<i className="fab fa-sass fa-md techItem" />
					<i className="fab fa-html5 fa-md techItem" />

					<div className="hiddenContent">
						<h4>Description</h4>
						<p>
							Wells Upholstery has an ambitious goal, to be a 100
							year company and change the upholstery industry. To
							do that the team needed to create technical
							infrastructure that will assist in that mission.
						</p>
						<h4>What do I do?</h4>
						<p>
							As acting CTO I'm leading development of a new web
							interface for internal and external use. Current
							objectives for the site are to showcase current
							projects, create a project portal for clients to
							stay up-to-date, and to drive inbound marketing with
							a blog.
						</p>
					</div>

					<div className="buttonGroup">
						<a
							href="https://wellsupholstery.now.sh/"
							target="_blank"
							rel="noreferrer"
							className="visitButton"
						>
							Visit
						</a>
						<a
							className="githubButton"
							href="https://github.com/vinnihoke/wellsupholstery"
							target="_blank"
							rel="noreferrer"
						>
							<i className="fab fa-github fa-md" />
							Github
						</a>
					</div>
				</div>
				<div className="time project">
					<h3>Time Blocking Tool</h3>
					<p>Personal Project</p>
					<i className="fab fa-js fa-md techItem" />
					<i className="fab fa-react fa-md techItem" />
					<i className="fab fa-sass fa-md techItem" />
					<i className="fab fa-html5 fa-md techItem" />
					<i className="fab fa-node-js fa-md techItem" />

					<div className="hiddenContent">
						<h4>Description</h4>
						<p>
							During the global pandemic I noticed many (newly
							remote) friends and family struggling to manage
							their daily schedule outside of the office. I
							created the Time Blocking tool as a way to help
							people setup a schedule and practice better time
							management at home.
						</p>
						<h4>What did I do?</h4>
						<p>
							Everything from planning to development was
							completed by myself. I have future plans to modify
							the experience and add more features to improve the
							value for users.
						</p>
					</div>

					<div className="buttonGroup">
						<a
							href="https://time-blocking-tool.now.sh/"
							target="_blank"
							rel="noreferrer"
							className="visitButton"
						>
							Visit
						</a>
						<a
							className="githubButton"
							href="https://github.com/vinnihoke/time-blocking-tool"
							target="_blank"
							rel="noreferrer"
						>
							<i className="fab fa-github fa-md" />
							Github
						</a>
					</div>
				</div>
				<div className="purecrypt project">
					<h3>Purecrypt</h3>
					<p>Package Author</p>
					<i className="fab fa-js fa-md techItem" />
					<i className="fab fa-node-js fa-md techItem" />

					<div className="hiddenContent">
						<h4>Description</h4>
						<p>
							While developing an API I ran into a situation that
							required basic string encryption, decryption, and
							validation. The existing tools felt like overkill so
							I decided to write a NPM package that everyone could
							use.
						</p>
						<h4>What did I do?</h4>
						<p>
							I set out with a goal to keep the package as light
							as possible, and to provide the simplist user
							experience and setup. The entirety of the project is
							built with Node.js and has a single dependency.
						</p>
					</div>

					<div className="buttonGroup">
						<a
							href="https://www.npmjs.com/package/purecrypt"
							target="_blank"
							rel="noreferrer"
							className="visitButton"
						>
							Visit
						</a>
						<a
							className="githubButton"
							href="https://github.com/vinnihoke/purecrypt"
							target="_blank"
							rel="noreferrer"
						>
							<i className="fab fa-github fa-md" />
							Github
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
