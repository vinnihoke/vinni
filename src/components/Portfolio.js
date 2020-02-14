// @ts-check

import React, { Component } from 'react'
import axios from 'axios'
import ActiveCard from './ActiveCard.js';
import CapstoneCard from './CapstoneCard.js'
import '../styles/index.scss'

class Portfolio extends Component {
	state = {
		capstone: [],
		active: [],
		profile: {},
		per_page: 15,
		page: 0
	}

	componentDidMount() {
		const fetchData = async () => {
			try {
				const profile = await axios.get('https://api.github.com/users/vinnihoke')
				this.setState({ profile: profile.data })
				this.setState({ page: Math.floor(this.state.profile.public_repos / this.state.per_page) })
				const capstone = await axios.get('https://api.github.com/users/vinnihoke/subscriptions')
				const active = await axios.get(`https://api.github.com/users/vinnihoke/repos?page=${this.state.page}&per_page=${this.state.per_page}`)
				this.setState({ capstone: capstone.data, active: active.data })
			} catch (e) {
				console.log(e.message)
			}
		}
		fetchData()
	}

	componentDidUpdate(prevProps) {
		if (this.state.page !== prevProps.page) {
			const fetchData = async () => {
				const active = await axios.get(`https://api.github.com/users/vinnihoke/repos?page=${this.state.page}&per_page=${this.state.per_page}`)
				this.setState({ active: active.data })
			}
			fetchData()
		}
	}



	pageUp = () => {
		if (this.state.page > 1) {
			this.setState({ page: this.state.page - 1 })
		} else {
			this.setState({ page: Math.floor(this.state.profile.public_repos / this.state.per_page) })
		}
		console.log(this.state)
	}
	pageDown = () => {
		if (this.state.page < Math.floor(this.state.profile.public_repos / this.state.per_page)) {
			this.setState({ page: this.state.page + 1 })
		} else {
			this.setState({ page: 1 })
		}
		console.log(this.state)
	}
	pageCount = () => {
		if (this.state.page === Math.floor(this.state.profile.public_repos / this.state.per_page)) {
			return <p>Showing Latest Projects</p>
		} else {
			return <p>{this.state.page} of {Math.floor(this.state.profile.public_repos / this.state.per_page)}</p>
		}
	}

	render() {
		return (
			<section id="Portfolio">
				<h3>Capstone Projects</h3>
				<div className="capstone-container">
					{this.state.capstone.map(project => {
						return <CapstoneCard key={project.id} {...project} />
					})}
				</div>
				<h3>Recent Projects</h3>
				<div className="active-container">
					{this.state.active.map(project => {
						return <ActiveCard key={project.id} {...project} />
					})}
				</div>
				<div>
					<button className="ui button" onClick={this.pageUp}>◀︎</button>
					<button className="ui button" onClick={this.pageDown}>▶︎</button>
					{this.pageCount()}
				</div>
			</section>
		)
	}
}

export default Portfolio
