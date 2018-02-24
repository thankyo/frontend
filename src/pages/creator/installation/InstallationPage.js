import React, { Fragment } from "react";
import WordPress from "./Wordpress";
import Manual from "./Manual";

export default function InstallationPage() {
  return (
    <Fragment>
      <WordPress/>
      <Manual/>
    </Fragment>
  )
}