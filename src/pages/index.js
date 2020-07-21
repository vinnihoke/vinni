import React from 'react';
import { Helmet } from 'react-helmet';
import '../styles/index.scss';
import '../styles/reset.scss';
import Bio from '../components/Bio';
import Header from '../components/Header';

export default function Index() {
	return (
		<main>
			<Helmet>
				<title>Vinni Hoke - Full Stack Engineer</title>
				<script
					src="https://kit.fontawesome.com/438cae8cec.js"
					crossOrigin="anonymous"
				/>
			</Helmet>
			<section id="Entry">
				<Header />
				<Bio />
			</section>
		</main>
	);
}
