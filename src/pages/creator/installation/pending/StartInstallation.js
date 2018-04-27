import React from "react";
import Resource from "components/Resource";
import { InstallIcon } from "components/Icon";
import RefreshLink from "components/RefreshLink";
import WebStackMarker from "./WebStackMarker";

const StartInstallation = ({ data: { url, webStack }, next }) => (
  <div className="timeline-item is-primary">
    <WebStackMarker webStack={webStack}/>
    <div className="timeline-content">
      <p className="heading">
        <Resource url={url}/>
      </p>
      <div className="field has-addons">
        <RefreshLink className="button is-small is-primary" onClick={next}>
          <InstallIcon>Install</InstallIcon>
        </RefreshLink>
      </div>
    </div>
  </div>
);

export default StartInstallation;