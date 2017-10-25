import React from "react";
import Brand from '../common/Brand';
import { Link } from 'react-router-dom';
import auth from "../reducers/util/auth";

function NavigationLink({ name, icon, pathname }) {
  let isActive = location.pathname === pathname;
  return (
    <div className="control">
      <Link to={pathname}>
        <div className={isActive ? "button button-control button-control-active" : "button button-control"}>
          <span className="icon"><i className={icon}/></span>
          <span>{name}</span>
        </div>
      </Link>
    </div>
  );
}

export default function Navigation({ links = [] }) {
  return (
    <nav className="navbar main-nav" role="navigation">
      <div className="container">
        <div className="navbar-brand">
          <Brand/>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="field has-addons field-new-style">
              {
                links.map((link, i) => <NavigationLink key={i} {...link}/>)
              }
            </div>
          </div>
          <div className="navbar-item">
            <a className="button button-logout button-white-border" onClick={() => auth.logout()}>
                  <span className="is-narrow">
                    <span className="icon"><i className="fa fa-sign-out"/></span>
                    <span>Log Out</span>
                  </span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}