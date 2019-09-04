import React from 'react';
import {connect} from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';
import DropDown from './DropDown.jsx';
import Account from './Account';
import History from './History';
import Contact from './Contact';
import '../assets/css/Home.css';

class Home extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        selection: "",
      };
      console.log(props.match.url);
    }

    render() {
      return (
        <React.Fragment>
          <header>
            <DropDown />
            <div className="welcom-msg">Welcome {this.props.user}!  {this.props.menu}</div>
          </header>
          <div className="content-block">
            {/* <Route path={`${this.props.match.url}/account`} component={Account}/> */}
            <Route path="/home/account" render={()=> (!!this.props.user ? <Account /> : <Redirect to="/login" />)} />
            <Route path="/home/history" render={()=> (!!this.props.user ? <History /> : <Redirect to="/login" />)} />
            <Route path="/home/contact" render={()=> (!!this.props.user ? <Contact /> : <Redirect to="/login" />)} />
          </div>
        </React.Fragment>
      );
    }
  }
  
  const mapStateToProps = (state) => {
    return {
      user: state.username,
      menu: state.menu
    };
  }
  export default connect(mapStateToProps)(withRouter(Home));