import React from "react";
import Brand from '../pages/components/Brand';
import { connect } from 'react-redux';
import { browserHistory, Link } from 'react-router';

function NavigationLink({ name, icon, pathname, isActive }) {
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

function Navigation({ logout, links }) {
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
              <div className="button button-logout button-white-border" onClick={logout}>
                  <span className="is-narrow">
                    <span className="icon"><i className="fa fa-sign-out"></i></span>
                    <span>Log Out</span>
                  </span>
              </div>
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

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => {
      browserHistory.push("/");
      dispatch(logout())
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation);