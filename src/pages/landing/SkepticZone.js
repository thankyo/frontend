import React from "react";

export default function () {
  return (
    <section className="section hero has-text-centered about-project about-project-white">
      <div className="hero-body">
        <div className="container">
          <h1 className="title title-dark">Why Loveit</h1>

          <div className="columns">
            <div className="column is-one-third">
              <div className="about-project-item">
                      <span className="is-narrow">
                        <span className="icon icon-on-white is-large">
                          <i className="fa fa-shield"></i>
                        </span>
                      </span>
                <h2 className="about-project-subtitle"><b>Bank level security</b></h2>
                <p>We do not store your Card information inside our system. We use market standard processing systems
                  that prevent any of your information to be harmed</p>
              </div>
            </div>
            <div className="column is-one-third">
              <div className="about-project-item">
                      <span className="is-narrow">
                        <span className="icon icon-on-white is-large">
                          <i className="fa fa-paypal"></i>
                        </span>
                      </span>
                <h2 className="about-project-subtitle"><b>More effective than PayPal or Stripe</b></h2>
                <p>Every donation lesser than 2$ turns into 18% commission, combining into a monthly donations, allows
                  us to lower this to only 10%</p>
              </div>
            </div>
            <div className="column is-one-third">
              <div className="about-project-item">
                      <span className="is-narrow">
                        <span className="icon icon-on-white is-large">
                          <i className="fa fa-file"></i>
                        </span>
                      </span>
                <h2 className="about-project-subtitle"><b>Full control of how much you spend</b></h2>
                <p>Set a limit for a month and we won't charge you more, than that. All your donations will be
                  transferred to the next month, until you rich your limit</p>
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="column is-one-third">
              <div className="about-project-item">
                      <span className="is-narrow">
                        <span className="icon icon-on-white is-large">
                          <i className="fa fa-plane"></i>
                        </span>
                      </span>
                <h2 className="about-project-subtitle"><b>No long term obligations</b></h2>
                <p>Long term support is a great thing, but it's not for everyone, so we don't force you to be in
                  relationship, that you are not sure you need</p>
              </div>
            </div>
            <div className="column is-one-third">
              <div className="about-project-item">
                      <span className="is-narrow">
                        <span className="icon icon-on-white is-large">
                          <i className="fa fa-circle-o"></i>
                        </span>
                      </span>
                <h2 className="about-project-subtitle"><b>Creativity freedom</b></h2>
                <p>Creators are free to do what they want, we pose no restrictions on how they express themselves</p>
              </div>
            </div>
            <div className="column is-one-third">
              <div className="about-project-item">
                      <span className="is-narrow">
                        <span className="icon icon-on-white is-large">
                          <i className="fa fa-usd"></i>
                        </span>
                      </span>
                <h2 className="about-project-subtitle"><b>We keep our fees low</b></h2>
                <p>90% of the tip goes directly to the creator, we'll be lowering this down in the future</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}