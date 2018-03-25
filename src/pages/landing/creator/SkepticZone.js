import React from "react";
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faDollarSign, faShieldAlt, faPlay } from '@fortawesome/fontawesome-free-solid';

export const AboutIcon = ({ icon, isWhite = true }) => (
  <span className="is-narrow">
    <span className={`icon ${isWhite ? "icon-on-white" : "icon-on-blue"} is-large`}>
      <FontAwesomeIcon icon={icon} size="3x"/>
    </span>
  </span>
);

export default function () {
  return (
    <section className="section hero has-text-centered about-project about-project-white">
      <div className="hero-body">
        <div className="container">
          <h1 className="title is-2">Why Loveit</h1>
          <div className="columns">
            <div className="column is-one-third">
              <div className="about-project-item">
                <AboutIcon icon={faDollarSign}/>
                <h2 className="about-project-subtitle"><b>90% of the tip goes directly to you</b></h2>
                <p>We keep our fees at 10% forever.</p>
              </div>
            </div>
            <div className="column is-one-third">
              <div className="about-project-item">
                <AboutIcon icon={faShieldAlt}/>
                <h2 className="about-project-subtitle"><b>Highest standards of security</b></h2>
                <p>
                  All processing is done through Stripe.
                </p>
              </div>
            </div>
            <div className="column is-one-third">
              <div className="about-project-item">
                <AboutIcon icon={faPlay}/>
                <h2 className="about-project-subtitle"><b>Plug and Play</b></h2>
                <p>
                  Simple installation and effortless use
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}