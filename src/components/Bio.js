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
							Pressed Juicery is building a mobile app to increase
							customer engagement and to add shopping rewards.
						</p>
						<h4>Responsibilities</h4>
						<ul>
							<li>
								<p>
									Developing components and views for the
									mobile web app
								</p>
							</li>
							<li>
								<p>
									Collaborating with director of engineering
									to improve user experience and design
								</p>
							</li>
						</ul>
						<h4>Details</h4>
						<ul>
							<li>
								<p>Remote and asynchronous development</p>
							</li>
							<li>
								<p>
									Components built in Storybook then used in
									the mobile app
								</p>
							</li>
						</ul>
					</div>

					<div className="buttonGroup">
						<a href="/pressed">Visit</a>
						<a
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
						<h4>Responsibilites</h4>
						<ul>
							<li>
								<p>
									As acting CTO I'm leading development of a
									new web interface for internal and external
									use
								</p>
							</li>
							<li>
								<p>Create objectives for future growth</p>
							</li>
							<li>
								<p>
									Current plans include a showcase current
									projects, development of a project portal
									for their clients to stay up-to-date, and a
									blog to drive inbound marketing
								</p>
							</li>
						</ul>
						<h4>Details</h4>
						<ul>
							<li>
								<p>
									Architected a professional code environment
									and enforcing a team engineering standard
								</p>
							</li>
							<li>
								<p>Componentized to allow for future plans</p>
							</li>
							<li>
								<p>
									Built for scale and reliability to meet
									client expetations
								</p>
							</li>
						</ul>
					</div>

					<div className="buttonGroup">
						<a
							href="https://wellsupholstery.now.sh/"
							target="_blank"
							rel="noreferrer"
						>
							Visit
						</a>
						<a
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
						<h4>Responsibilities</h4>
						<ul>
							<li>
								<p>
									Built to give users a way to define a daily
									schedule/routine
								</p>
							</li>
							<li>
								<p>
									Designed to be familiar, easy to use, and
									valuable
								</p>
							</li>
							<li>
								<p>
									Architected and developed entirely by myself
								</p>
							</li>
						</ul>
						<h4>Details</h4>
						<ul>
							<li>
								<p>Minimum viable product built in two weeks</p>
							</li>
							<li>
								<p>
									Future plans include better categorization
									of tasks, group scheduling with friends, and
									the ability to share time blocks
								</p>
							</li>
						</ul>
					</div>

					<div className="buttonGroup">
						<a
							href="https://time-blocking-tool.now.sh/"
							target="_blank"
							rel="noreferrer"
						>
							Visit
						</a>
						<a
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
						<h4>Responsibilities</h4>
						<ul>
							<li>
								<p>
									Create a tool that included features of much
									larger packages in a smaller, more friendly
									package
								</p>
							</li>
							<li>
								<p>
									Architected to be lightweight, reliable, and
									useful
								</p>
							</li>
						</ul>
						<h4>Details</h4>
						<ul>
							<li>
								<p>Designed with simplicity in mind</p>
							</li>
							<li>
								<p>
									Developed using a single dependency and
									built in Node tools
								</p>
							</li>
						</ul>
					</div>

					<div className="buttonGroup">
						<a
							href="https://www.npmjs.com/package/purecrypt"
							target="_blank"
							rel="noreferrer"
						>
							Visit
						</a>
						<a
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
