import React from "react";
import { IconWithText } from "components/Icon";

function SocialConnection({ providerKey, name, icon }) {
  if (!providerKey) {
    return (
      <p className="control">
        <div className="button is-inverted is-outlined">
          <IconWithText className={icon} text={`Connect with ${name}`}/>
        </div>
      </p>
    )
  }

  return (
    <p className="control" disabled>
      <a className="button is-primary" disabled>
        <IconWithText className={icon} text={`Connected with ${name}`}/>
      </a>
    </p>
  )
}

export default function ConnectedSocial({ profiles }) {
  return <div>
    <div className="field has-addons">
      <SocialConnection providerKey={profiles.facebook} icon="fa fa-facebook-official" name="FB"/>
      <SocialConnection providerKey={profiles.google} icon="fa fa-google" name="Google"/>
    </div>
  </div>
}