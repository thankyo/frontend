import React from "react";
import { AboutIcon } from "./SkepticZone";
import Brain from "./brain.svg";
import Cent from "./cent.svg";
import { faThumbsUp, faCircle, faHandPeace } from '@fortawesome/fontawesome-free-solid';

export default function () {
  return (
    <section className="section hero has-text-centered about-project about-project-white">
      <div className="hero-body">
        <div className="container">
          <h1 className="title title-dark">What is Loveit</h1>
          <div className="columns">
            <div className="column is-one-third">
              <div className="about-project-item">
                <span className="icon icon-on-blue is-large loveit-fab">
                  <Brain height={48}/>
                </span>
                <h2 className="about-project-subtitle"><b>Loveit is a <i>smart tip</i> platform</b></h2>
                <p>
                  It works the same way as Facebook Like, but besides sending your love, creator also gets a small tip
                </p>
              </div>
            </div>
            <div className="column is-one-third">
              <div className="about-project-item">
                <span className="icon icon-on-blue is-large loveit-fab">
                  <Cent height={48} />
                </span>
                <h2 className="about-project-subtitle"><b>Tip is really <i>&nbsp;just&nbsp;a&nbsp;dime</i></b></h2>
                <p>
                  It's made small on purpose, so that you could tip without harming your budget.
                </p>
              </div>
            </div>
            <div className="column is-one-third">
              <div className="about-project-item">
                <AboutIcon icon={faHandPeace}/>
                <h2 className="about-project-subtitle"><b><i>Easiest</i> way to support creators</b></h2>
                <p>
                  A click, is all it takes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
