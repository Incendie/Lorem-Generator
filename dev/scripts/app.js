import React from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter as Router,
	Route, Link, NavLink
} from 'react-router-dom';
import { ajax } from 'jquery';
import Lorem from './Lorem';

console.log("ewoks");
class App extends React.Component {
	constructor() {
		super();
		this.state = {

		}
	}
	render() {
		let paragraphs = [];
		for (let i = 0; i < 10; i++) {
			paragraphs.push(<Lorem />);
		}
		return (
			<div>

				{paragraphs}

			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'));