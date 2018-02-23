import React from "react";
import Spinner from "./spinner.svg";

export default (size) => () => (
  <div className="has-text-centered">
    <Spinner style={{ width: size, height: size }}/>
  </div>
)