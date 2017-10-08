import React from "react";

export default function () {
  return (
    <section className="section hero has-text-centered about-project about-project-white">
      <div className="hero-body">
        <div className="container">
          <h1 className="title title-dark">What is Loveit</h1>
          <div className="columns">
            <div className="column is-one-third">
              <div className="about-project-item">
                      <span className="is-narrow">
                        <span className="icon icon-on-white is-large">
                          <i className="fa fa-thumbs-o-up"/>
                        </span>
                      </span>
                <h2 className="about-project-subtitle"><b>Loveit is a simple <i>microtip</i> platform</b></h2>
                <p>It works the same way as Facebook Like, but you know with a bit more meaning</p>
              </div>
            </div>
            <div className="column is-one-third">
              <div className="about-project-item">
                      <span className="is-narrow">
                        <span className="icon icon-on-white is-large">
                          <i className="fa fa-circle-o"/>
                        </span>
                      </span>
                <h2 className="about-project-subtitle"><b><i>Microtip</i> - is a small amount, which is really&nbsp;just&nbsp;a&nbsp;dime</b></h2>
                <p>It's made small on purpose, so that you could use it without harming your budget</p>
              </div>
            </div>
            <div className="column is-one-third">
              <div className="about-project-item">
                      <span className="is-narrow">
                        <span className="icon icon-on-white is-large">
                          <i className="fa fa-hand-peace-o"/>
                        </span>
                      </span>
                <h2 className="about-project-subtitle"><b>Easiest and effective way to support creators everywhere</b></h2>
                <p>Supporting creative freedom we make world a better place</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
