import React from "react";
import JoinButton from "./JoinButton";

export default function () {
  return (
    <section className="hero is-medium page-promo page-promo-boy">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title title-promo">
            Support creativity
          </h1>
          <p className="subtitle subtitle-promo">Just a dime, every time</p>
          <JoinButton/>
        </div>
      </div>
    </section>
  );
}