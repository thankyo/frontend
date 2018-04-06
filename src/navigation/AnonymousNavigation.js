import React from "react";
import Brand from "components/Brand";
import { Link } from "react-router-dom";

const AnonymousNavigation = () => (
  <div className="hero-head">
    <header className="navbar main-nav">
      <div className="navbar-brand">
        <Link to="/">
          <Brand/>
        </Link>
      </div>

      <div className="navbar-end">
        <div className="field is-grouped is-hidden-mobile">
          <p className="control">
            <Link to="/auth/login" className="button is-inverted is-primary">
              <span>Log in</span>
            </Link>
          </p>
          <p className="control">
            <Link to="/auth" className="button is-inverted is-outlined is-primary">
              <span>Register</span>
            </Link>
          </p>
        </div>
      </div>
    </header>
  </div>
);

export default AnonymousNavigation;