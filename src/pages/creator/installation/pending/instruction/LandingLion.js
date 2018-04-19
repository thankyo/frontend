import React, { Fragment } from "react";
import IFrameInstruction from "./IFrameInstruction";

const LandingLion = () => (
  <Fragment>
    <div className="content">
      <h2 className="subtitle is-6 is-marginless">You'll need to do this steps for every page</h2>
      <h2 className="subtitle is-7 is-marginless">We are working on making this simpler</h2>

      <ol>
        <li>
          <div className="title is-size-6">Press on a target page</div>
        </li>
        <li>
          <div className="title is-size-6">Go to <i>Custom Code</i> section</div>
        </li>
        <li>
          <div className="title is-size-6">Copy and paste following to the <i>body</i> part</div>
        </li>
      </ol>
      <IFrameInstruction/>

      <br/>
      That is it you are done, repeat as needed.
      <br/>
      <br/>
      <a href="https://loveit.landinglion.com" target="_blank">example</a>
    </div>
  </Fragment>
);

export default LandingLion;