import React from "react";
import JoinButton from "./JoinButton";

export default function () {
  return (
    <section className="hero is-medium page-promo page-creator-boy">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title title-promo">
            Plug and Play
          </h1>
          <JoinButton/>
        </div>
      </div>
    </section>
  );
}