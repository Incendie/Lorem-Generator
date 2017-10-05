import React from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter as Router,
	Route, Link, NavLink
} from 'react-router-dom';
import { ajax } from 'jquery';

import Header from './Header';
import Lorem from './Lorem';
import Form from './Form';
import Footer from './Footer';
class App extends React.Component {
	constructor() {
		super();
		this.state = {
			numParagraphs: 0,
			numSentences: 0,
		}
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		this.setState({
			[e.target.name]: parseInt(e.target.value, 0),
		});
	}

	render() {
		let paragraphs = [];
		for (let i = 0; i < this.state.numParagraphs; i++) {
			paragraphs.push(<Lorem key={i} numSentences={this.state.numSentences} />);
		}
		return (
			<div>
				<Header />
				<Form handleChange={this.handleChange} />
				{paragraphs}
				<Footer />
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'));