import React from "react";
import { IconWithText } from "components/Icon";

function SocialConnection({ providerKey, name, icon, href }) {
  if (!providerKey) {
    return (
      <p className="control">
        <a className="button is-inverted is-outlined" href={href}>
          <IconWithText className={icon}>Connect with {name}</IconWithText>
        </a>
      </p>
    )
  }

  return (
    <p className="control">
      <a className="button is-primary" disabled>
        <IconWithText className={icon}>Connected with {name}</IconWithText>
      </a>
    </p>
  )
}

export default function ConnectedSocial({ profiles, url }) {
  return <div>
    <div className="field has-addons">
      <SocialConnection providerKey={profiles.facebook} icon="fa fa-facebook-official" name="FB" href={url.facebook}/>
      <SocialConnection providerKey={profiles.google} icon="fa fa-google" name="Google" href={url.google}/>
    </div>
  </div>
}