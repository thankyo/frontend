import React, { Fragment } from "react";
import { DeleteIcon, FacebookIcon, GoogleIcon, TumblrIcon, } from "components/Icon";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { deleteSocialConnection } from "reducers/user.actions";

const ProviderIcon = ({ provider, children }) => {
  switch (provider) {
    case "facebook":
      return <FacebookIcon>{children}</FacebookIcon>;
    case "google":
      return <GoogleIcon>{children}</GoogleIcon>;
    case "tumblr":
      return <TumblrIcon>{children}</TumblrIcon>;
  }
};

let SocialConnection = ({ isConnected, provider, url, deleteSocialConnection }) => {
  if (isConnected) {
    return (
      <div className="field has-addons">
        <div className="control">
          <div className="button is-success">
            <ProviderIcon provider={provider}>Connected</ProviderIcon>
          </div>
        </div>
        <div className="control">
          <div className="button is-pulled-right is-danger" onClick={() => deleteSocialConnection(provider)}>
            <DeleteIcon>Disconnect</DeleteIcon>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className="field has-addons">
      <a className="button is-primary" href={url}>
        <ProviderIcon provider={provider}>Connect</ProviderIcon>
      </a>
    </div>
  )
};

const mapStateToProps = ({ user: { my: { data: { profiles } }}, auth: { url }}, { provider }) => ({ url: url[provider], isConnected: profiles[provider] })
const mapDispatchToProps = (dispatch) => bindActionCreators({ deleteSocialConnection }, dispatch);

SocialConnection = connect(mapStateToProps, mapDispatchToProps)(SocialConnection);

export default function ConnectedSocial() {
  return <Fragment>
    <SocialConnection provider="facebook"/>
    <SocialConnection provider="google"/>
    <SocialConnection provider="tumblr"/>
  </Fragment>
}

