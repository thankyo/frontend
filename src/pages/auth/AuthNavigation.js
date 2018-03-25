import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import { LoginIcon, RegisterIcon } from "components/Icon";

const ACTIVE_STYLE = {
  borderBottomWidth: 3,
  borderBottomColor: "white"
};

export default class AuthNavigation extends Component {
  render() {
    return (
      <div className="tabs auth-nav is-fullwidth is-primary">
        <ul>
          <li>
            <NavLink exact to="/auth" activeStyle={ACTIVE_STYLE} activeClassName="is-active">
              <RegisterIcon>Register</RegisterIcon>
            </NavLink>
          </li>
          <li>
            <NavLink to="/auth/login" activeStyle={ACTIVE_STYLE} activeClassName="is-active">
              <LoginIcon>Log in</LoginIcon>
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}