import React from "react";
import { faHeart as faSolidHeart, faCalendar } from '@fortawesome/fontawesome-free-solid';
import ClickOrTapWord from "./ClickOrTapWord";
import { AboutIcon } from "./SkepticZone";
import Logo from "components/logo.svg";

export default function () {
  return (
    <section className="section hero has-text-centered about-project about-project-blue">
      <div className="hero-body">
        <div className="container">
          <h1 className="title title-light">How it works</h1>
          <div className="columns">
            <div className="column is-one-third">
              <div className="about-project-item">
                <span className="is-narrow">
                  <span className="icon icon-on-blue is-large loveit-fab">
                    <Logo width={40} height={40}/>
                  </span>
                </span>
                <h2 className="about-project-subtitle">
                  <b>Creators put Loveit button on every&nbsp;piece&nbsp;they&nbsp; create</b>
                </h2>
                <p>
                  It can be a comic, drawing, photo, blog, basically anything on the web can have it
                </p>
              </div>
            </div>
            <div className="column is-one-third">
              <div className="about-project-item">
                <span className="is-narrow">
                  <span className="icon icon-on-blue is-large loveit-fab">
                    <Logo width={40} height={40} className="fab-is-loved"/>
                  </span>
                </span>
                <h2 className="about-project-subtitle"><b>Whenever you <ClickOrTapWord/> it, we register&nbsp;your&nbsp;tip</b></h2>
                <p>
                  We track your support throughout the month
                </p>
              </div>
            </div>
            <div className="column is-one-third">
              <div className="about-project-item">
                <AboutIcon icon={faCalendar} isWhite={false}/>
                <h2 className="about-project-subtitle"><b>At the end of the month we combine them and make a final charge</b></h2>
                <p>
                  You are in full control of how much you spend - set your own limits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}