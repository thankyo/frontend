import React, { Fragment } from "react";
import { InstallIcon } from "components/Icon";

const WORD_PRESS_INSTALLATION = encodeURI("wp-admin/plugin-install.php?tab=plugin-information&plugin=loveit-integration&reauth=1");

const WordPress = ({ url }) => {
  return (
    <Fragment>
      <h2 className="subtitle is-6">First you'll need to do few manual steps in your site admin dashboard.</h2>

      <div className="content">
        <ol>
          <li>
            <div className="title is-size-6">Install <b>LoveIt integration</b> plugin.</div>
            <a className="button is-primary is-outlined is-small" href={`${url}/${WORD_PRESS_INSTALLATION}`} target="_blank">
              <InstallIcon>Install Plugin</InstallIcon>
            </a>
            <br/>
            <br/>
          </li>
          <li>
            <div className="title is-size-6"> Activate it</div>
          </li>
        </ol>
      </div>
      <h2 className="subtitle is-6">That's it now every post will have a LoveIt button</h2>
      <a href="http://worpdress.loveit.tips" className="is-small" target="_blank">example</a>
    </Fragment>
  );
};

export default WordPress;