import React, { Component } from "react";

import Brand from 'components/Brand';
import { LogOutIcon, NavigationIcon } from "components/Icon";

import { Link } from 'react-router-dom';
import auth from "reducers/util/auth";
import SearchPanel from "./SearchPanel";

import { connect } from "react-redux";

function NavigationLink({ name, icon, pathname, isHiddenDesktop = false }) {
  let isActive = location.pathname.startsWith(pathname);
  return (
    <Link to={pathname} className={`navbar-item ${isActive && "is-active"} ${isHiddenDesktop && "is-hidden-desktop"}`}>
      <span className="icon"><i className={icon}/></span>
      <span>{name}</span>
    </Link>
  );
}

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = { active: false };
  }

  changeActive = () => {
    this.setState((state) => ({ active: !state.active }))
  };

  render() {
    let { links = [] } = this.props;
    let { active } = this.state;
    return (
      <nav className="navbar is-primary is-fixed-top" role="navigation" aria-label="main navigation">
        <div className="container">
          <div className="navbar-brand">
            <div className="navbar-item">
              <Link to="/dashboard/my" style={{ height: "38px" }}>
                <Brand/>
              </Link>
            </div>
            <div className="navbar-item is-expanded is-hidden-desktop">
              <SearchPanel/>
            </div>
            <button className={`button navbar-burger is-primary ${active && "is-active"}`} onClick={this.changeActive}>
              <span/>
              <span/>
              <span/>
            </button>
          </div>
          <div className={`navbar-menu ${active && "is-active"}`} onClick={this.changeActive}>
            <div className="navbar-item is-expanded is-hidden-mobile">
              <SearchPanel/>
            </div>
            <div className="navbar-end">
              <div className="navbar-item has-dropdown is-hoverable">
                <div className="navbar-link is-hidden-mobile">
                  <NavigationIcon/>
                </div>
                <div className="navbar-dropdown is-boxed is-right">
                  {links.map((link, i) => <NavigationLink key={i} {...link}/>)}
                  <hr className="navbar-divider"/>
                  <a onClick={() => auth.logout()} className="navbar-item">
                    <LogOutIcon>Log Out</LogOutIcon>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

const mapStateToProps = ({ navigation: { links } }) => ({ links });

export default connect(mapStateToProps)(Navigation);