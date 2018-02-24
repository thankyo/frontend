import React from "react";
import WordPress from "./installation/Wordpress"
import Manual from "./installation/Manual";

export default function InstallPage({ url }) {
  return (
    <div className="section">
      <WordPress url={url}/>
      <Manual url={url}/>
    </div>
  )
}