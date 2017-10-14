import React from "react";
import { Link, Route } from 'react-router-dom';

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
          <span className="icon is-small"><i className="fa fa-registered"/></span>
          <span>Register</span>
        </NavItem>
        <NavItem to="/auth/login" exact={true}>
          <span className="icon is-small"><i className="fa fa-sign-in"/></span>
          <span>Log in</span>
        </NavItem>
      </ul>
    </div>
  );
}