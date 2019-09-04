import React from 'react';
import { withRouter } from 'react-router-dom';

class Contact extends React.Component {
    // constructor(props) {
    //   super(props);
    // }


  render() {
    return (
      <div>
        <h1>This is Contact!</h1>
      </div>
    );
  }
}
  
  export default withRouter(Contact);