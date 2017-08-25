import React from "react";
import ManagedResources from "../thank/resource/ManagedResources";
import JSIntegration from "./JSIntegration";

export default function ({ id }) {
  return (
    <div>
      <h3 className="title is-3">1. Resource ownership</h3>
      <div className="subtitle is-5">
        Before starting integration you need to verify resource ownership.
      </div>
      <ManagedResources id={id}/>
      <br/>
      <br/>
      <br/>
      <h3 className="title is-3">2. LoveIt button integration</h3>
      <h4 className="subtitle is-5">After verifying resource you can integrate it to your site</h4>
      <JSIntegration/>
      <br/>
      <br/>
      <br/>
      <h3 className="title is-5 pull-right">Did not work? <a
        href="mailto:antono@loveit.tips?subject=Integration problem">contact us.</a></h3>
    </div>
  );
}
