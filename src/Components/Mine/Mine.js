import React, { Component } from "react";

class Mine extends Component {
  constructor(props) {
    super(props);
    this.state={
      guess: '',
      message: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(e) {
    this.setState({guess: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    if(this.state.guess == 13) {
      this.setState({message: 'You guessed correct!'});
      this.props.incCoinVal(1);
      this.props.addAction('Mined', 1);
    } else {
      this.setState({message: 'Incorrect'});
    }
  }

  render() {
    return (
      <div>
        <h1>Mine ShintoCoins</h1>
        <p>Here you can mine ShintoCoins by being the first to solve the algorithm:</p>
        <p>What is the 7th Fibonacci sequence number?</p>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} placeholder="Number"/>
          <input type="submit" value="mine" />
        </form>
        <p>{this.state.message}</p>
      </div>
    )}
}

export default Mine;
