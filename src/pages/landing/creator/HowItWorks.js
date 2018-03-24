import React from "react";
import { faHeart as faSolidHeart, faCalendar, faPlug } from '@fortawesome/fontawesome-free-solid';
import { faHeart } from '@fortawesome/fontawesome-free-regular';
import { AboutIcon } from "./SkepticZone";

export default function () {
  return (
    <section className="section hero has-text-centered ">
      <div className="hero-body">
        <div className="container">
          <h1 className="title is-white">How it works</h1>
          <div className="columns">
            <div className="column is-one-third">
              <div className="about-project-item">
                <AboutIcon icon={faPlug} isWhite={true}/>
                <h2 className="about-project-subtitle">
                  <b>Integrate with Loveit</b>
                </h2>
                <p>It should take you less then 5 minutes.</p>
              </div>
            </div>
            <div className="column is-one-third">
              <div className="about-project-item">
                <AboutIcon icon={faSolidHeart} isWhite={true}/>
                <h2 className="about-project-subtitle"><b>Your posts will have LoveIt button</b>
                </h2>
                <p>When ever it's clicked we register a tip.</p>
              </div>
            </div>
            <div className="column is-one-third">
              <div className="about-project-item">
                <AboutIcon icon={faCalendar} isWhite={true}/>
                <h2 className="about-project-subtitle"><b>Get paid at the end of the month</b></h2>
                <p>We combine tips from all of your fans and send them your way.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}