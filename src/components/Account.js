import React from 'react';
import { withRouter } from 'react-router-dom';

class Account extends React.Component {
    // constructor(props) {
    //   super(props);
    // }

  getData() {
    fetch("/manifest.json", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => res.json());
    // fetch("http://localhost:3001/aaa", {
    //   method: "GET",
    //   mode: 'cors',
    //   headers: {
    //     "Access-Control-Allow-Headers": "*",
    //     // "Content-Type": "text/plain"
    //   }
    // }).then(res => res.json());
  }
  render() {
    return (
      <div>
        <h1>This is Account!</h1>
        <button onClick={()=>this.getData()}>GET</button>
      </div>
    );
  }
}
  
  export default withRouter(Account);