import React from "react";
import Brand from "../../common/Brand";
import { Link } from 'react-router-dom';
import JoinButton from "./JoinButton";

export default function () {
  return (
    <section className="hero is-medium is-fullheight page-promo is-primary">
      <div className="hero-head">
        <header className="navbar main-nav">
          <div className="navbar-brand">
            <Brand/>
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
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title title-main-promo title-main-promo-left">
            Support creators with a single click
          </h1>
          <JoinButton/>
        </div>
      </div>
    </section>
  );
}