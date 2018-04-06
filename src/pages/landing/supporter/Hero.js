import React from "react";
import JoinButton from "./JoinButton";
import ClickOrTapWord from "./ClickOrTapWord";
import AnonymousNavigation from "../../../navigation/AnonymousNavigation";

export default function () {
  return (
    <section className="hero is-medium is-fullheight page-promo is-primary">
      <AnonymousNavigation/>

      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title title-main-promo title-main-promo-left title-landing">
            Support creators with a single <ClickOrTapWord/>
          </h1>
          <JoinButton/>
        </div>
      </div>
    </section>
  );
}