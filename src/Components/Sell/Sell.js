import React, { Component } from "react";

class Sell extends Component {
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
    let amount = Number(this.state.amt);
    if(amount) {
      if(this.props.userCoins >= amount) {
        this.props.decCoinVal(amount);
        this.props.addAction('Sell', amount);
      } else {
        this.setState({message: "You don't have enough coins to sell that much"});
      }

    } else {
      this.setState({message: 'must enter number'});
    }
  }

  render() {
    return (
      <div>
        <h1>Sell ShintoCoins</h1>
        <p>Current ShintoCoins Value: ${this.props.coinVal}.00</p>
        <p>Number of ShintoCoins Owned: {this.props.userCoins}</p>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} placeholder="Number"/>
          <input type="submit" value="Sell" />
        </form>
        <p>{this.state.message}</p>
      </div>
    )}
}


export default Sell;
