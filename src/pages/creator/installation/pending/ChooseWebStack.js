import React, { Fragment } from "react";
import Resource from "components/Resource";
import { BackIcon, InstallIcon } from "components/Icon";
import Instructions from "./instruction";
import WebStackMarker from "./WebStackMarker";

const ChooseWebStack = ({ data: { url, webStack }, next, previous }) => (
  <Fragment>
    <li className="timeline-item is-primary is-large">
      <WebStackMarker webStack={webStack}/>
      <div className="timeline-content">
        <p className="heading">
          <Resource url={url}/>
        </p>
        <Instructions url={url} webStack={webStack}/>
        <br/>
        <div className="button is-small is-primary" onClick={next}>
          <InstallIcon>Next</InstallIcon>
        </div>
      </div>
    </li>
    <li className="timeline-header is-success">
      <a className="tag is-primary" onClick={previous}>
        <BackIcon>Back</BackIcon>
      </a>
    </li>
  </Fragment>
);

export default ChooseWebStack;