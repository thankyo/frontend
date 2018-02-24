import React from "react";

export default function WordPressInstallation({ url }) {
  return (
    <section className="section">
      <h1 className="title">Ready for installation</h1>
      <h2 className="subtitle">We'll need to send you to your site admin dashboard on {url} for a few manual steps.</h2>

      <div className="content">

        <div className="columns">
          <div className="column is-4">
            <div className="content">
              <h4 className="title">1. Download the plugin.</h4>
              Press download button to download zip plugin.
            </div>
            <div>
              <a className="is-primary button" href='/loveit_integration.zip' target="_blank">
                Download plugin
              </a>
            </div>
          </div>
          <div className="column is-4">
            <div className="content">
            <h4 className="subtitle">2. Install LoveIt plugin.</h4>
              You will be redirected to your site's admin dashboard to install the LoveIt plugin.
            </div>

            <div>
              <a className="button is-primary"
                 href={`${url}/wp-login.php?redirect_to=/wp-admin/plugin-install.php`}
                 target="_blank">
                Install Now
              </a>
            </div>
          </div>
          <div className="column is-4">
            <div className="content">
              <h4 className="title">3. Activate it</h4>
              Then you'll click the blue <strong>Activate</strong> link to activate the LoveIt plugin.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};