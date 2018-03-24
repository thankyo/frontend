import React from "react";
import Brand from "components/Brand";
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