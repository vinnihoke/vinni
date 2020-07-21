import React from 'react';
import Project from './Project.js';
import Tech from './Tech.js';
import CallToAction from './CallToAction.js';
import styles from '../styles/bio.module.scss';

export default function Bio() {
	const projects = [
		{
			title: 'Pressed Juicery',
			role: 'Full Stack Engineer',
			color: 'white',
			background: 'mediumseagreen',
			tech: [
				'fa-js',
				'fa-vuejs',
				'fa-sass',
				'fa-html5',
				'fa-css3',
				'fa-node-js',
			],
			description: `The team at Pressed Juicery has hired an in-house
		    engineering team to build a mobile app. The goal is
		    to increase customer engagement and add shopping
		    rewards, therefore greatly increasing the customer
		    experince.`,
			responsibilities: [
				`Developing components and views for the
		    mobile web app`,
				`Collaborating with director of engineering
		    to improve user experience and design`,
			],
			details: [
				`Remote and asynchronous development
		    environment`,
				`Components built in Storybook to be used in
		    the mobile app`,
			],
			visitedUrl: '/pressed',
			githubUrl: 'https://github.com/Pressed-Juicery',
		},
		{
			title: 'Wells Upholstery',
			role: 'Full Stack Engineer',
			color: 'black',
			background: 'gold',
			tech: [
				'fa-js',
				'fa-react',
				'fa-sass',
				'fa-html5',
				'fa-css3',
				'fa-node-js',
			],
			description: `Wells Upholstery has an ambitious goal, to be a 100 year company and change the upholstery industry. The
			team needs to create the technical infrastructure
			and tools required to achieve that mission.`,
			responsibilities: [
				`As acting CTO I'm leading the development of
				a new web interface for internal and
				external use`,
				`Create objectives for future growth and
				drive innovation`,
				`Current plans include a showcase of current
				projects, development of a project portal
				for their clients to stay up-to-date, and a
				blog to drive inbound marketing`,
			],
			details: [
				`Architecting a professional code environment
				and a team engineering standard`,
				`Designing components to allow for future
				plans and growth`,
			],
			visitedUrl: 'https://wellsupholstery.now.sh/',
			githubUrl: 'https://github.com/vinnihoke/wellsupholstery',
		},
		{
			title: 'Time Blocking Tool',
			role: 'Personal Project',
			color: 'white',
			background: 'dodgerblue',
			tech: [
				'fa-js',
				'fa-react',
				'fa-sass',
				'fa-html5',
				'fa-css3',
				'fa-node-js',
			],
			description: `During the global pandemic I noticed many (newly
			remote) friends and family struggling to manage
			their daily schedule outside of the office. I
			created the Time Blocking tool as a way to help
			people setup a schedule and practice better time
			management at home.`,
			responsibilities: [
				`Built to give users a way to define a daily
				schedule/routine`,
				`Designed to be familiar, easy to use, and
				valuable`,
				`Planned, architected and developed entirely
				by myself`,
			],
			details: [
				`Minimum viable product built in two weeks`,
				`Future plans include better categorization
				of tasks, group scheduling with friends, and
				the ability to share time blocks`,
			],
			visitedUrl: 'https://time-blocking-tool.now.sh/',
			githubUrl: 'https://github.com/vinnihoke/time-blocking-tool',
		},
		{
			title: 'Purecrypt',
			role: 'Package Author',
			color: 'white',
			background: 'tomato',
			tech: ['fa-js', 'fa-node-js'],
			description: `While developing an API I ran into a situation that required basic string encryption, decryption, and
			validation. The existing tools felt like overkill so
			I decided to write a NPM package that everyone could
			use.`,
			responsibilities: [
				`Create a tool that included features of much
				larger packages in a smaller, more friendly
				tool`,
				`Architected to be lightweight, reliable, and
				useful`,
			],
			details: [
				`Designed with simplicity in mind`,
				`Developed using a single dependency and
				built in Node tools`,
			],
			visitedUrl: 'https://www.npmjs.com/package/purecrypt',
			githubUrl: 'https://github.com/vinnihoke/purecrypt',
		},
	];

	return (
		<div className={styles.bio}>
			<div className={styles.introduction}>
				<div className={styles.intro}>
					<h2 className="title">Vinni Hoke</h2>
					<h4>Full Stack Engineer</h4>
				</div>
				<p className={styles.statement}>
					👋 My name is Vinni. I'm a Full Stack Engineer engineer who
					loves using technology to solve complex challenges at scale.
					Looking to impact a cross-functional, diversified team with
					my unique skillset and background.
				</p>
			</div>
			<CallToAction />
			<Tech />
			<div className={styles.projects}>
				<h3>Projects and Experience</h3>
				{projects.map((data, index) => (
					<Project data={data} key={index} />
				))}
			</div>
		</div>
	);
}
