import React, { Component } from "react";

class Buy extends Component {
  constructor(props) {
    super(props);
    this.state={
      amt: '',
      message: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({amt: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    let amount = parseInt(this.state.amt);
    if(amount) {
      this.props.incCoinVal(amount);
      this.props.addAction('Buy', amount);
    } else {
      this.setState({message: 'must enter number'});
    }
  }

  render() {
    return (
      <div>
        <h1>Buy ShintoCoins</h1>
        <p>Current ShintoCoins Value: ${this.props.coinVal}.00</p>
        <p>Number of ShintoCoins Owned: {this.props.userCoins}</p>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} placeholder="Number"/>
          <input type="submit" value="Buy" />
        </form>
        <p>{this.state.message}</p>
      </div>
    )}
}

export default Buy;
