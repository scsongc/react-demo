import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../actions'
import {data as UsersData} from '../data';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      loginFail: null
    }
  }
  handleUsernameChange = (e) => {
    this.setState({username: e.target.value})
  }
  handlePasswordChange = (e) => {
    this.setState({password: e.target.value})
  }
  onLogin = () => {
    let auth = false;
    UsersData.forEach((el) => {
      if(el.username === this.state.username && el.password === this.state.password)
        auth = true;
    })
    if(auth) {
      this.props.dispatch(login(this.state.username));
      this.props.history.push("/");
    }else {
      this.setState({loginFail: true, password: ""});
    }
  }

  render() {
    return (
      <div>
        <div>Login</div>
        <div>
          Username:<br />
          <input type="text" value={this.state.username} onChange={this.handleUsernameChange}/>
        </div>
        <div>
          Password:<br />
          <input type="password" value={this.state.password} onChange={this.handlePasswordChange}/>
        </div>
        <button onClick={this.onLogin}>Login</button>
        {this.state.loginFail && <div className="error-text">Login failed. The username or password is not correct!</div> }
      </div>
    );
  }
}
  
export default withRouter(connect()(Login));