import React, { Component } from "react";

function Browse(props) {
  function view(action) {

  }
  let actionList = props.actions.map((action, idx) => {
    return (
      <tr key={action.id}>
        <td>{action.action}</td>
        <td>{action.amount}</td>
        <td>{action.value}</td>
        <td><Link to="/transaction/:id" id={action.id}>View Details</Link></td>
      </tr>
    )
  });
  return (
    <div>
      <h3>Shinto Coin Ledger</h3>
      <table>
        <thead>
          <tr>
            <th>Action</th>
            <th>Amount</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
        {actionList}
        </tbody>
      </table>
    </div>
  );
}

export default Browse;
