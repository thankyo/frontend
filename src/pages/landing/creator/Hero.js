import React from "react";
import Navigation from "../../../navigation/Navigation";
import JoinButton from "./JoinButton";

export default function () {
  return (
    <section className="hero is-medium is-fullheight creator-promo is-primary">
      <Navigation/>

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