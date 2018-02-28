import React from "react";
import { Link, Route } from 'react-router-dom';
import { LoginIcon, RegisterIcon } from "components/Icon";

function NavItem({ children, to, exact }) {
  return (
    <Route path={to} exact={exact} children={({ match }) => (
      <li className={match && "is-active"}>
        <Link to={to}>{children}</Link>
      </li>
    )}/>
  )
}

export default function () {
  return (
    <div className="tabs is-fullwidth">
      <ul>
        <NavItem to="/auth" exact={true}>
          <RegisterIcon>Register</RegisterIcon>
        </NavItem>
        <NavItem to="/auth/login" exact={true}>
          <LoginIcon>Log in</LoginIcon>
        </NavItem>
      </ul>
    </div>
  );
}