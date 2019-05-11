import React, { Component } from 'react';

export class GetNewStock extends Component {

	state = {
    	symbol: '',
  	}

  	handleChange = (event) => {
  		console.log(event.target.name)
    	this.setState({
      		[event.target.name]: event.target.value,
    	});
  	}

  	handleSubmit = (event) => {
  		event.preventDefault()
  		const {symbol} = this.state
  		console.log(symbol)
  	}

	render() {
		const {symbol} = this.state
		return (
			<div>
				<h2>Add new stock to database</h2>
				<form onSubmit={this.handleSubmit}>
				    <input name='symbol' placeholder='Symbol'  value={symbol} onChange={this.handleChange} />
              		<br></br>
              		<input type='submit'/>
				</form>
			</div>
		);
	}
}
