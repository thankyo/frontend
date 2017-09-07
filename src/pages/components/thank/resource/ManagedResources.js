import React from "react";
import Verification from "./Verification";
import OwnedResources from "./OwnedResources";


export default function({ id }) {
  return (
    <div>
      <Verification id={id}/>
      <OwnedResources id={id}/>
    </div>
  );
}