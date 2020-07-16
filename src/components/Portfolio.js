// @ts-check

import React, { Component } from 'react';
import axios from 'axios';
import ActiveCard from './ActiveCard.js';
import CapstoneCard from './CapstoneCard.js';
import '../styles/components/portfolio.scss';

class Portfolio extends Component {
	constructor() {
		super();
		this.state = {
			capstone: [],
			active: [],
			profile: {},
			per_page: 15,
			page: 0,
		};
	}

	componentDidMount() {
		const fetchData = async () => {
			try {
				const profile = await axios.get(
					'https://api.github.com/users/vinnihoke'
				);
				this.setState({ profile: profile.data });
				this.setState({
					page: Math.floor(
						this.state.profile.public_repos / this.state.per_page
					),
				});
				const capstone = await axios.get(
					'https://api.github.com/users/vinnihoke/subscriptions'
				);
				const active = await axios.get(
					`https://api.github.com/users/vinnihoke/repos?page=${this.state.page}&per_page=${this.state.per_page}`
				);
				this.setState({ capstone: capstone.data, active: active.data });
			} catch (e) {
				console.log(e.message);
			}
		};
		fetchData();
	}

	componentDidUpdate(prevProps) {
		if (this.state.page !== prevProps.page) {
			const fetchData = async () => {
				const active = await axios.get(
					`https://api.github.com/users/vinnihoke/repos?page=${this.state.page}&per_page=${this.state.per_page}`
				);
				this.setState({ active: active.data });
			};
			fetchData();
		}
	}

	pageUp = () => {
		if (this.state.page > 1) {
			this.setState({ page: this.state.page - 1 });
		} else {
			this.setState({
				page: Math.floor(
					this.state.profile.public_repos / this.state.per_page
				),
			});
		}
		console.log(this.state);
	};

	pageDown = () => {
		if (
			this.state.page <
			Math.floor(this.state.profile.public_repos / this.state.per_page)
		) {
			this.setState({ page: this.state.page + 1 });
		} else {
			this.setState({ page: 1 });
		}
		console.log(this.state);
	};

	pageCount = () => {
		if (
			this.state.page ===
			Math.floor(this.state.profile.public_repos / this.state.per_page)
		) {
			return <p>Showing Latest Projects</p>;
		}
		return (
			<p>
				{this.state.page} of{' '}
				{Math.floor(
					this.state.profile.public_repos / this.state.per_page
				)}
			</p>
		);
	};

	render() {
		return (
			<section id="Portfolio">
				<h3>Capstone Projects</h3>
				<div className="capstoneContainer">
					{this.state.capstone.map((project) => (
						<CapstoneCard key={project.id} {...project} />
					))}
				</div>
				<h3>All Projects</h3>
				<div className="allContainer">
					{this.state.active.map((project) => (
						<ActiveCard key={project.id} {...project} />
					))}
				</div>
				<div className="pageNavigation">
					<button type="button" onClick={this.pageUp}>
						‹
					</button>
					{this.pageCount()}
					<button type="button" onClick={this.pageDown}>
						›
					</button>
				</div>
			</section>
		);
	}
}

export default Portfolio;
