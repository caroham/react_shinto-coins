import React, { Component } from 'react';
import './App.css';

import "react-router";
import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom';

import Home from './Components/Home/Home.js';
import Browse from './Components/Browse/Browse.js';
import Buy from './Components/Buy/Buy.js';
import Mine from './Components/Mine/Mine.js';
import Sell from './Components/Sell/Sell.js';
import TransactionDetail from './Components/TransactionDetail/TransactionDetail.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      coinVal: 0,
      userCoins: 0,
      actions: [],
      idPlace: 0
    }

    this.incCoinVal = this.incCoinVal.bind(this);
    this.decCoinVal = this.decCoinVal.bind(this);
    this.addAction = this.addAction.bind(this);
  }

  incCoinVal(amt) {
    this.setState({coinVal: this.state.coinVal+amt, userCoins: this.state.userCoins+amt});
    console.log('in inc coin val, amount: ', amt, this.state.coinVal, this.state.userCoins);
  }

  decCoinVal(amt) {
    this.setState({coinVal: this.state.coinVal-amt, userCoins: this.state.userCoins-amt});
    console.log('in dec coin val, ', this.state.coinVal, this.state.userCoins);
  }

  addAction(action, amt) {
    let actionObj = {
      action: action,
      value: this.state.coinVal,
      amount: amt,
      id: this.state.idPlace
    }
    this.setState({actions: [...this.state.actions, actionObj], idPlace: this.state.idPlace +1});
  }


  render() {
    return (
      <BrowserRouter>
        <div>
          {/* nav menu */}
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/mine">Mine Coins</Link></li>
            <li><Link to="/buy">Buy Coins</Link></li>
            <li><Link to="/sell">Sell Coins</Link></li>
            <li><Link to="/browse">Browse Ledger</Link></li>
          </ul>
          {/* components to render based on url */}
          <Route exact path="/" component={Home}/>
          <Route path="/mine" render={() => <Mine incCoinVal={this.incCoinVal} addAction={this.addAction}/>}/>
          <Route path="/buy" render={() => <Buy incCoinVal={this.incCoinVal} addAction={this.addAction} coinVal={this.state.coinVal} userCoins={this.state.userCoins}/>}/>
          <Route path="/sell" render={() => <Sell decCoinVal={this.decCoinVal} addAction={this.addAction} coinVal={this.state.coinVal} userCoins={this.state.userCoins}/>}/>
          <Route path="/browse" render={() => <Browse actions={this.state.actions}/>}/>
          <Route exact path="/transaction/:id" render={() => <TransactionDetail actions={this.state.actions}/>}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
