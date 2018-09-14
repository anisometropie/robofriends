import React from 'react';
import CardList from 'components/CardList';
import SearchBox from 'components/SearchBox';
import Scroll from 'components/Scroll';
import './App.css'

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			robots: [],
			searchField: ''
		};
	}

	componentWillMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then( response => response.json() )
			.then( users => this.setState({robots: users}) );
	}

	onSearchChange = (event) => {
		this.setState( {searchField: event.target.value } );
	};

	render() {
		let filteredRobots = this.state.robots.filter( robot => {
			let robotName = robot.name.toLowerCase(robot.name);
			let searchField = this.state.searchField.toLowerCase();
			return robotName.includes(searchField);
		});
		if (this.state.robots.length === 0) {
			return <h1 className='tc'>Loading</h1>;
		}
		else {
			return (
				<div className='tc'>
					<h1>RoboFriends</h1>
					<SearchBox searchChange={this.onSearchChange}/>
					<CardList robots={filteredRobots}/>
				</div>
			);
		}
	}
}

export default App;
