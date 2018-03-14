import React from "react";
import { InstallIcon } from "components/Icon";

const WORD_PRESS_INSTALLATION = encodeURI("wp-admin/plugin-install.php?tab=plugin-information&plugin=loveit-integration&reauth=1");

const WordPress = ({ url }) => {
  return (
    <div>
      <h2 className="subtitle is-6">First you'll need to do few manual steps in your site admin dashboard.</h2>

      <div className="content">
        <ol>
          <li>
            <h4 className="title is-6">Install <b>LoveIt integration</b> plugin.</h4>

            <a className="button is-primary is-outlined is-small" href={`${url}${WORD_PRESS_INSTALLATION}`} target="_blank">
              <InstallIcon>Install Plugin</InstallIcon>
            </a>
            <br/>
            <br/>
          </li>
          <li>
            <h4 className="title is-6"> Activate it</h4>
          </li>
        </ol>
      </div>
      <h2 className="subtitle is-6">That's it now every post will have a LoveIt button</h2>
    </div>
  );
};

export default WordPress;