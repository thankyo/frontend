import React from "react";
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faDollarSign, faShieldAlt } from '@fortawesome/fontawesome-free-solid';
import { faPaypal } from '@fortawesome/fontawesome-free-brands';

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
                <AboutIcon icon={faPaypal}/>
                <h2 className="about-project-subtitle"><b>More effective on most donations than PayPal</b></h2>
                <p>Every donation lesser than 2$ turns into 18% commission, combining into a monthly donations, allows
                  us to lower this to only 10%</p>
              </div>
            </div>
            <div className="column is-one-third">
              <div className="about-project-item">
                <AboutIcon icon={faShieldAlt}/>
                <h2 className="about-project-subtitle"><b>Bank level security</b></h2>
                <p>We do not store your Card information inside our system. We use market standard processing systems
                  that prevent any of your information to be harmed</p>
              </div>
            </div>
            <div className="column is-one-third">
              <div className="about-project-item">
                <AboutIcon icon={faDollarSign}/>
                <h2 className="about-project-subtitle"><b>We keep our fees low</b></h2>
                <p>90% of the tip goes directly to the creator</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}