import React from "react";
import { Link, Route } from 'react-router-dom';
import { IconWithText } from "components/Icon";

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
          <IconWithText className="fa fa-registered">Register</IconWithText>
        </NavItem>
        <NavItem to="/auth/login" exact={true}>
          <IconWithText className="fa fa-sign-in">Log in</IconWithText>
        </NavItem>
      </ul>
    </div>
  );
}