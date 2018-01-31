import React, { Component } from "react";
import Brand from '../common/Brand';
import { Link } from 'react-router-dom';
import auth from "../reducers/util/auth";
import SearchPanel from "./SearchPanel";
import { Icon, IconWithText } from "../common/Icon";

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
        <div className="navbar-brand">
          <div className="navbar-item">
            <Link to="/dashboard/my">
              <Brand/>
            </Link>
          </div>
          <button className={`button navbar-burger is-primary ${active && "is-active"}`} onClick={this.changeActive}>
            <span/>
            <span/>
            <span/>
          </button>
        </div>
        <div className={`navbar-menu ${active && "is-active"}`} onClick={this.changeActive}>
          <SearchPanel/>
          <div className="navbar-end">
            <div className="navbar-item has-dropdown is-hoverable">
              <div className="navbar-link is-hidden-mobile">
                <Icon className="fa fa-compass fa-2x"/>
              </div>
              <div className="navbar-dropdown is-boxed is-right">
                {links.map((link, i) => <NavigationLink key={i} {...link}/>)}
                <hr className="navbar-divider"/>
                <a onClick={() => auth.logout()} className="navbar-item">
                  <IconWithText className="fa fa-sign-out" text="Log Out"/>
                </a>
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