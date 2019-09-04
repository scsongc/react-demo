import React from 'react';
import {BrowserRouter, Route, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
// import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null
    };
  }
  render() {
    return (
      <BrowserRouter>
        <Route path="/" exact render={()=> (!!this.props.username ? <Redirect to="/home" /> : <Redirect to="/login" />)} />
        <Route path="/login" render={()=><Login />}/>
        <Route path="/home" render={()=> (!!this.props.username ? <Home /> : <Redirect to="/login" />)} />
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {username: state.username};
}

export default connect(mapStateToProps)(App);