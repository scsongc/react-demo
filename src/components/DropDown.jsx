import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actions from '../actions';
import { withRouter } from 'react-router-dom';
import '../assets/css/dropDown.css';

class DropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true
    };
  }
  clickDropDown = (e) => {
    e.stopPropagation();
    this.setState({
      hidden: !this.state.hidden
    });
  }
  clickMenu = async (e) => {
    e.stopPropagation();
    this.setState({
      hidden: true
    });
    // this.props.history.push(`/home/${e.target.innerText.toLowerCase()}`);
    await this.props.actions.selectMenu(e.target.innerText);
    console.log(this.props.menu);
    this.props.history.push(`/home/${this.props.menu.toLowerCase()}`);
  }
  setClickRef = (node) => {
    this.clickRef = node;
  }
  handleClickOutside = (e) => {
    if(this.clickRef && !this.clickRef.contains(e.target)) {
      this.setState({hidden: true});
    }
  }
  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }
  componnetWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }
  render() {
      return (
        <div className="dropDownList" ref={this.setClickRef}>
          <div className="menu" onClick={this.clickDropDown}>Menu</div>
          <ul className={`menuContent ${this.state.hidden ? "hidden" : ""}`}>
            <li onClick={this.clickMenu}>Account</li>
            <li onClick={this.clickMenu}>History</li>
            <li onClick={this.clickMenu}>Contact</li>
          </ul>
        </div>
      );
  }

}

const mapStateToProps = state => {
  return {
    menu: state.menu
  };
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
    // selectMenu: menu => {
    //   dispatch(menu);
    // }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(DropDown));