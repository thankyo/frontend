import React from "react";
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faFile, faShieldAlt, faPlane, faDollarSign } from '@fortawesome/fontawesome-free-solid';
import { faCircle } from '@fortawesome/fontawesome-free-regular';
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
                <AboutIcon icon={faShieldAlt}/>
                <h2 className="about-project-subtitle"><b>Bank level security</b></h2>
                <p>We do not store your Card information inside our system. We use market standard processing systems
                  that prevent any of your information to be harmed</p>
              </div>
            </div>
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
                <AboutIcon icon={faFile}/>
                <h2 className="about-project-subtitle"><b>Full control
                  of &nbsp;how&nbsp;much&nbsp;you&nbsp;spend&nbsp;</b></h2>
                <p>Set a limit for a month and we won't charge you more, than that. All your donations will be
                  transferred to the next month, until you reach your limit</p>
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="column is-one-third">
              <div className="about-project-item">
                <AboutIcon icon={faPlane}/>
                <h2 className="about-project-subtitle"><b>No long term obligations</b></h2>
                <p>Long term support is a great thing, but it's not for everyone, so we don't force you to be in
                  relationship, that you are not sure you need</p>
              </div>
            </div>
            <div className="column is-one-third">
              <div className="about-project-item">
                <AboutIcon icon={faCircle}/>
                <h2 className="about-project-subtitle"><b>Creativity freedom</b></h2>
                <p>Creators are free to do what they want, we pose no restrictions on how they express themselves</p>
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