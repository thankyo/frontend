import React from "react";
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faDollarSign, faShieldAlt, faToggleOn, faSearch } from '@fortawesome/fontawesome-free-solid';
import Buddha from "./buddha.svg";

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
          <h1 className="title title-dark">Why Loveit</h1>

          <div className="columns">
            <div className="column is-one-third">
              <Buddha height={48} style={{ marginBottom: 35 }}/>
              <h2 className="about-project-subtitle"><b>Karma booster</b></h2>
              <p>
                Just kidding
              </p>
            </div>

            <div className="column is-one-third">
              <div className="about-project-item">
                <AboutIcon icon={faSearch}/>
                <h2 className="about-project-subtitle"><b>Discover amazing content</b></h2>
                <p>Find what people truelly love</p>
              </div>
            </div>

            <div className="column is-one-third">
              <div className="about-project-item">
                <AboutIcon icon={faDollarSign}/>
                <h2 className="about-project-subtitle"><b>90% of the tip goes to the creator</b></h2>
                <p>10% is processing fee.</p>
              </div>
            </div>
          </div>

          <div className="columns">
            <div className="column is-2"/>
            <div className="column is-one-third">
              <div className="about-project-item">
                <AboutIcon icon={faToggleOn}/>
                <h2 className="about-project-subtitle"><b>Full control
                  of &nbsp;how&nbsp;much&nbsp;you&nbsp;spend&nbsp;</b></h2>
                <p>Set a limit for a month and we'll never charge you more, than that.</p>
              </div>
            </div>
            <div className="column is-one-third">
              <div className="about-project-item">
                <AboutIcon icon={faShieldAlt}/>
                <h2 className="about-project-subtitle"><b>Highest standards of security</b></h2>
                <p>
                  We do not store your Card information and use best market available processing system (Stripe)
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}