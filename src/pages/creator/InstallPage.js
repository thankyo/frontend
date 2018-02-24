import React from "react";
import WordPress from "../settings/installation/Wordpress"

export default function InstallationPage({ url }) {
  return (
    <div className="section">
      <WordPress url={url}/>
    </div>
  )
}