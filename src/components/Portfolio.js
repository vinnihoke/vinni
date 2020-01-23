import React, { Component } from 'react'
import axios from 'axios'
import ActiveCard from './ActiveCard.js';
import CapstoneCard from './CapstoneCard.js'
import '../styles/index.scss'

class Portfolio extends Component {
	state = {
		capstone: [],
		active: []
	}

	componentDidMount() {
		const fetchData = async () => {
			try {
				const capstone = await axios.get('https://api.github.com/users/vinnihoke/subscriptions')
				const active = await axios.get('https://api.github.com/users/vinnihoke/repos')
				this.setState({ capstone: capstone.data, active: active.data })
				console.log(this.state)
			} catch (e) {
				console.log(e.message)
			}
		}
		fetchData()
	}

	render() {
		return (
			<section id="Portfolio">
				{this.state.capstone.map(project => {
					return <CapstoneCard key={project.id} {...project} />
				})}
				<div className="active-container">
					{this.state.active.map(project => {
						return <ActiveCard key={project.id} {...project} />
					})}
				</div>
			</section>
		)
	}
}

export default Portfolio
