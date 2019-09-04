import React from 'react';
import { withRouter } from 'react-router-dom';

class History extends React.Component {
    // constructor(props) {
    //   super(props);
    // }


  render() {
    return (
      <div>
        <h1>This is History!</h1>
      </div>
    );
  }
}
  
export default withRouter(History);