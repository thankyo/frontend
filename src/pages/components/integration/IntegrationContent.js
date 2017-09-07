import React from "react";
import ManagedResources from "../thank/resource/ManagedResources";
import JSIntegration from "./JSIntegration";

export default function ({ id }) {
  return (
    <div>
      <ManagedResources id={id}/>
      <br/>
      <JSIntegration/>
      <br/>
      <h3 className="title is-6">Did not work? <a
        href="mailto:antono@loveit.tips?subject=Integration problem">contact us.</a></h3>
    </div>
  );
}
