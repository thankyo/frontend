import React from "react";
import { WebStackImage } from "components/Icon";

const WebStackMarker = ({ webStack }) => (
  <div className="timeline-marker is-primary is-image is-24x24 has-text-centered">
    <WebStackImage webStack={webStack} color="white"/>
  </div>
);

export default WebStackMarker;