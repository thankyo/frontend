import React, { Fragment } from "react";
import IFrameInstruction from "./IFrameInstruction";

const Manual = () => (
  <Fragment>
    <div className="subtitle is-size-6">
      First <strong>copy & paste</strong> the following before the
      closing {"</body>"} tag
      of page.
    </div>

    <IFrameInstruction/>
  </Fragment>
);

export default Manual;