import React from "react";
import Brand from '../pages/components/Brand';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import auth from "../reducers/util/auth";

function NavigationLink({ name, icon, pathname }) {
  let isActive = location.pathname === pathname;
  return (
    <div className="control">
      <Link to={pathname}>
        <div className={isActive ? "button button-control button-control-active" : "button button-control"}>
          <span className="icon"><i className={icon}></i></span>
          <span>{name}</span>
        </div>
      </Link>
    </div>
  );
}

function Navigation({ links }) {
  return (
    <nav className="nav main-nav">
      <div className="container">
        <div className="nav-left">
          <Brand/>
        </div>
        <div className="nav-right">
          <div className="nav-item field has-addons field-new-style">
            {
              links.map((link, i) => <NavigationLink key={i} {...link}/>)
            }
          </div>
          <div className="nav-item">
            <div className="block">
              <a className="button button-logout button-white-border" onClick={() => auth.logout()}>
                  <span className="is-narrow">
                    <span className="icon"><i className="fa fa-sign-out"></i></span>
                    <span>Log Out</span>
                  </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

const mapStateToProps = ({ menu }) => {
  return {
    links: menu
  };
};

export default connect(
  mapStateToProps,
  undefined
)(Navigation);