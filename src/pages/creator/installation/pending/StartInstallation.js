import React from "react";
import Resource from "components/Resource";
import { InstallIcon } from "components/Icon";
import RefreshLink from "components/RefreshLink";
import WebStackMarker from "./WebStackMarker";

const StartInstallation = ({ data: { url, webStack }, next }) => (
  <li className="timeline-item is-primary">
    <WebStackMarker webStack={webStack}/>
    <div className="timeline-content">
      <p className="heading">
        <Resource url={url}/>
      </p>
      <RefreshLink className="button is-small is-primary" onClick={next}>
        <InstallIcon>Install</InstallIcon>
      </RefreshLink>
    </div>
  </li>
);

export default StartInstallation;