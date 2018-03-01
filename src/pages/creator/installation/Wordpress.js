import React from "react";

const WORD_PRESS_INSTALLATION = encodeURI("wp-admin/plugin-install.php?tab=plugin-information&plugin=loveit-integration&reauth=1");

const WordPress = ({ url }) => {
  return (
    <section className="section">
      <h1 className="title">Ready for installation</h1>
      <h2 className="subtitle">We'll need to send you to your site admin dashboard on {url} for a few manual steps.</h2>

      <div className="content">

        <div className="columns">
          <div className="column is-6">
            <div className="content">
            <h4 className="subtitle">1. Install LoveIt integration plugin.</h4>
              You will be redirected to your site's admin dashboard to install the LoveIt plugin.
            </div>

            <div>
              <a className="button is-primary"
                 href={`${url}${WORD_PRESS_INSTALLATION}`}
                 target="_blank">
                Install Now
              </a>
            </div>
          </div>
          <div className="column is-4">
            <div className="content">
              <h4 className="title">2. Activate it</h4>
              Then you'll click the blue <strong>Activate</strong> link to activate the LoveIt plugin.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WordPress;