import React, { Fragment } from "react";
import Resource from "components/Resource";
import { InstallIcon, EmailIcon } from "components/Icon";
import WebStackMarker from "./WebStackMarker";
import RefreshLink from "components/RefreshLink";
import { deleteOwnedProject, reSendEmailVerification } from "reducers/project.actions";
import { connect } from "react-redux";
import { bindToActions } from "reducers/util/action";

const EmailVerification = ({ data: { email, url, webStack, verified }, next, deleteOwnedProject, reSendEmailVerification }) => {
  if (verified ) {
    next();
    return <div/>
  }
  return (
    <Fragment>
      <div className="timeline-item is-primary is-large">
        <WebStackMarker webStack={webStack}/>
        <div className="timeline-content">
          <p className="heading">
            <Resource url={url}/>
          </p>
          <br/>
          Verification link sent to <a href={`mailto:${email}`}><b>{email}</b></a><br/>
          <hr/>
          <div className="field has-addons">
            <div className="control">
              <div className="button is-small is-primary is-outlined" onClick={next}>
                <InstallIcon>Install</InstallIcon>
              </div>
            </div>
            <div className="control">
              <RefreshLink className="button is-small is-primary is-outlined" onClick={() => reSendEmailVerification({ email })}>
                <EmailIcon>Resend</EmailIcon>
              </RefreshLink>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default connect(undefined, bindToActions({ deleteOwnedProject, reSendEmailVerification }))(EmailVerification);