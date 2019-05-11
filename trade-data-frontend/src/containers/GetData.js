import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export class GetData extends Component {
	

	render() {

		return (
			<div>
				<h1>This is the get data page</h1>
				<div >
					<Link to="/get-data-new-stock/">Add new stock to database</Link>
				</div>

				<li>Update Database to be current</li>
			</div>
		);
	}
}
