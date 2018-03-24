import React from "react";
import Brand from "components/Brand";
import JoinButton from "./JoinButton";

export default function () {
  return (
    <section className="hero is-medium is-fullheight creator-promo is-primary">
      <div className="hero-head">
        <header className="navbar main-nav">
          <div className="navbar-brand">
            <Brand/>
          </div>
        </header>
      </div>

      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title title-landing title-creator-promo">
            Simplest support platform, you'll ever work with
          </h1>
          <JoinButton/>
        </div>
      </div>
    </section>
  );
}