import React from "react";
import AnonymousNavigation from "../../../navigation/AnonymousNavigation";
import JoinButton from "./JoinButton";

export default function () {
  return (
    <section className="hero is-medium is-fullheight creator-promo is-primary">
      <AnonymousNavigation/>

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