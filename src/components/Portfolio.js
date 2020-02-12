import React, { Component } from 'react'
import axios from 'axios'
import ActiveCard from './ActiveCard.js';
import CapstoneCard from './CapstoneCard.js'
import '../styles/index.scss'

class Portfolio extends Component {
	constructor() {
		super()
		this.state = {
			capstone: [],
			active: [],
			profile: {},
			per_page: 15,
			page: 0
		}
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
				console.log(this.state)
			} catch (e) {
				console.log(e.message)
			}
		}
		fetchData()
		console.log(this.state)
	}



	// pageUp = () => {
	// 	if (this.state.page > 0) return this.setState({ page: this.state.page-- })
	// }
	// pageDown = () => {
	// 	if (this.state.page !== Math.floor(this.state.profile.public_repos / this.state.per_page)) this.setState({ page: this.state.page++ })
	// }

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
					{/* <button onClick={this.pageDown}>◁</button>
					<button onClick={this.pageUp}>▷</button> */}
				</div>
			</section>
		)
	}
}

export default Portfolio
