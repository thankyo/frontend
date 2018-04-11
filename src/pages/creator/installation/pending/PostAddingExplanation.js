import React, { Fragment } from "react";
import { BackIcon, InstallIcon } from "components/Icon";
import WebStackMarker from "./WebStackMarker";

const PostAddingExplanation = ({ data: { webStack }, next, previous }) => (
  <Fragment>
    <li className="timeline-item is-primary is-large">
      <WebStackMarker webStack={webStack}/>
      <div className="timeline-content">
        <div className="content">
          <p className="heading">Adding new Posts</p>
          There are 2 ways we add posts to our system.
          <ol>
            <li>On first LoveIt button press</li>
            <li>RSS feed</li>
          </ol>
          <br/>
          In both cases we are using Facebook meta information to create internal post.<br/>
          So if you have a good Facebook integration, you won't need to change anything.<br/>
          <b><i>Even if not, we are here to help.</i></b>
        </div>
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

export default PostAddingExplanation;