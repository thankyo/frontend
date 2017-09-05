import React from "react";

export default function () {
  return (
    <section className="section hero has-text-centered about-project about-project-blue">
      <div className="hero-body">
        <div className="container">
          <h1 className="title title-light">How microtip works</h1>
          <div className="columns">
            <div className="column is-one-third">
              <div className="about-project-item">
                      <span className="is-narrow">
                        <span className="icon icon-on-blue is-large">
                          <i className="fa fa-heart-o"></i>
                        </span>
                      </span>
                <h2 className="about-project-subtitle"><b>Creators put Loveit button on every&nbsp;piece&nbsp;they&nbsp;
                  create</b></h2>
                <p>It can be a song, poem, photo, blog, basically anything on the web can have this button</p>
              </div>
            </div>
            <div className="column is-one-third">
              <div className="about-project-item">
                      <span className="is-narrow">
                        <span className="icon icon-on-blue is-large">
                          <i className="fa fa-heart"></i>
                        </span>
                      </span>
                <h2 className="about-project-subtitle"><b>Whenever you click it, we register&nbsp;your&nbsp;tip</b>
                </h2>
                <p>We track your support throughout the month and charge you total at the end of it</p>
              </div>
            </div>
            <div className="column is-one-third">
              <div className="about-project-item">
                      <span className="is-narrow">
                        <span className="icon icon-on-blue is-large">
                          <i className="fa fa-calendar"></i>
                        </span>
                      </span>
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