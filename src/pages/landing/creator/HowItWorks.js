import React from "react";
import { faHeart as faSolidHeart, faCalendar, faPlug } from '@fortawesome/fontawesome-free-solid';
import { faHeart } from '@fortawesome/fontawesome-free-regular';
import { AboutIcon } from "./SkepticZone";

export default function () {
  return (
    <section className="section hero has-text-centered is-primary">
      <div className="hero-body">
        <div className="container">
          <h1 className="title is-white">How it works</h1>
          <div className="columns">
            <div className="column is-one-third">
              <div className="about-project-item">
                <AboutIcon icon={faPlug} isWhite={false}/>
                <h2 className="about-project-subtitle">
                  <b>Integrate with Loveit</b>
                </h2>
                <p>It should take you less then 5 minutes</p>
              </div>
            </div>
            <div className="column is-one-third">
              <div className="about-project-item">
                <AboutIcon icon={faSolidHeart} isWhite={false}/>
                <h2 className="about-project-subtitle"><b>Whenever you click it, we register&nbsp;your&nbsp;tip</b>
                </h2>
                <p>We track your support throughout the month and charge you total at the end of it</p>
              </div>
            </div>
            <div className="column is-one-third">
              <div className="about-project-item">
                <AboutIcon icon={faCalendar} isWhite={false}/>
                <h2 className="about-project-subtitle"><b>At the end of the month we combine your tips</b></h2>
                <p>You are in full control of how much you spend - set your own limits and we won't charge you more,
                  than that</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}