import React from "react";
import { FacebookIcon, GoogleIcon } from "components/Icon";

const SocialConnection = ({ providerKey, name, icon, href, children }) => (
  <p className="control">
    <a className="button is-primary" disabled={providerKey} href={providerKey ? "" : href}>
      {children}
    </a>
  </p>
);

export default function ConnectedSocial({ profiles, url }) {
  return <div>
    <div className="field has-addons">
      <SocialConnection providerKey={profiles.facebook} href={url.facebook}>
        <FacebookIcon>Connect with FB</FacebookIcon>
      </SocialConnection>
      <SocialConnection providerKey={profiles.google} href={url.google}>
        <GoogleIcon>Connect with Google</GoogleIcon>
      </SocialConnection>
    </div>
  </div>
}