import React from "react";
import { faHeart as faSolidHeart, faCalendar } from '@fortawesome/fontawesome-free-solid';
import { faUsers, faSun, faDollarSign } from '@fortawesome/fontawesome-free-solid';
import { AboutIcon } from "./SkepticZone";

export default function () {
  return (
    <section className="section hero has-text-centered is-primary">
      <div className="hero-body">
        <div className="container">
          <h1 className="title is-white">What you get</h1>
          <div className="columns">
            <div className="column is-one-third">
              <div className="about-project-item">
                <AboutIcon icon={faDollarSign} isWhite={false}/>
                <h2 className="about-project-subtitle"><b>We'll pay for the coffee</b></h2>
                <p>Additional bonus to your everyday's job.</p>
              </div>
            </div>
            <div className="column is-one-third">
              <div className="about-project-item">
                <AboutIcon icon={faUsers} isWhite={false}/>
                <h2 className="about-project-subtitle">
                  <b>New audience</b>
                </h2>
                <p>Every post you make will be in our platform. Our audience becomes your audience.</p>
              </div>
            </div>
            <div className="column is-one-third">
              <div className="about-project-item">
                <AboutIcon icon={faSun} isWhite={false}/>
                <h2 className="about-project-subtitle"><b>Do what you do, nothing more</b>
                </h2>
                <p>You don't need to create any additional content. What you publish will be immediately added to our platform</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}