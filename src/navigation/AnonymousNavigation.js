import React from "react";
import Brand from "components/Brand";
import { Link, NavLink } from "react-router-dom";
import { LoginIcon, RegisterIcon, SearchIcon } from "components/Icon";

const AnonymousNavigation = () => (
  <div className="hero-head">
    <header className="navbar main-nav">
      <div className="navbar-brand">
        <Link to="/">
          <Brand/>
        </Link>
      </div>


      <div className="navbar-end">
        <div className="field navbar-item has-addons is-hidden-mobile">
          <p className="control">
            <Link className="button is-inverted is-outlined is-primary" to="/search">
              <SearchIcon>Discover</SearchIcon>
            </Link>
          </p>
          <p className="control">
            <NavLink to="/auth/login" className="button is-inverted is-outlined is-primary" activeClassName="is-active">
              <LoginIcon>Log in</LoginIcon>
            </NavLink>
          </p>
          <p className="control">
            <Link to="/auth" className="button is-inverted is-outlined is-primary">
              <RegisterIcon>Register</RegisterIcon>
            </Link>
          </p>
        </div>
      </div>
    </header>
  </div>
);

export default AnonymousNavigation;