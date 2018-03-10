import React from "react";
import { connect } from "react-redux";
import auth from "reducers/util/auth";
import { LogOutIcon } from "components/Icon";
import { Link } from "react-router-dom";
import Brand from "components/Brand";
import { componentFactory } from "components/loadingComponent";
import spinnerFactory from "components/spinnerFactory";
import { getUser } from "reducers/user.actions";
import { getContributions } from "reducers/statistic.actions";

let UserImage = ({ avatar }) => {
  return (
    <figure className="image is-rounded is-128x128">
      <img src={avatar}/>
    </figure>
  )
};

const mapUserImageToProps = (dispatch) => {
  dispatch(getUser("my"));
  return {}
};

UserImage = connect(({ user: { my }}) => my, mapUserImageToProps)(componentFactory(UserImage, spinnerFactory(124)));

function NavigationLink({ name, icon, pathname, isActive, isHiddenDesktop = false }) {
  return (
    <li className={isActive ? "is-active" : ""}>
      <Link to={pathname} className={isHiddenDesktop ? "is-hidden-desktop" : ""}>
        {name}
      </Link>
    </li>
  );
}

function Navigation({ links, contributions }) {
  return (
    <section className="hero is-primary is-small">
      <div className="hero-head">
        <nav className="navbar">
          <div className="container">
            <div className="navbar-brand">
              <Link to="/dashboard/my" style={{ paddingTop: "7px" }}>
                <Brand/>
              </Link>
              <span className="navbar-burger burger">
                <span/>
                <span/>
                <span/>
              </span>
            </div>
            <div className="navbar-menu">
              <div className="navbar-end">
                <span className="navbar-item">
                  <a onClick={() => auth.logout()} className="button is-info is-inverted is-outlined">
                    <LogOutIcon>Log Out</LogOutIcon>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <div className="hero-body">
        <div className="container">
          <nav className="level">
            <div className="level-item is-pulled-left">
              <UserImage/>
            </div>
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">Contributions</p>
                <p className="title">{contributions}</p>
              </div>
            </div>
          </nav>
        </div>
      </div>

      <div className="hero-foot">
        <div className="container">
          <nav className="tabs is-boxed">
            <ul>
              {links.map((link, i) => <NavigationLink key={i} {...link}/>)}
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
}

const mapStateToProps = ({ navigation: { links }, statistic: { contribution: { my = {} } } }) => (
  { links, contributions: my.contributions || 0 }
);

const mapDispatchToProps = (dispatch) => {
  dispatch(getContributions("my"));
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);