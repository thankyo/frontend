import React from "react";
import Verification from "./Verification";
import OwnedResources from "./OwnedResources";


export default function({ id }) {
  return (
    <div>
      <OwnedResources id={id}/>
      <hr/>
      <Verification id={id}/>
    </div>
  );
}