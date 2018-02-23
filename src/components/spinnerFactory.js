import React from "react";
import Spinner from "./spinner.svg";

export default (size, className) => () => (
  <div className={className || "has-text-centered"}>
    <Spinner width={size} height={size}/>
  </div>
)