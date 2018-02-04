import React from "react";
import { IconWithText, Icon } from "../../components/Icon";

function VerificationStatus({ status }) {
  switch (status) {
    case 'notVerified' :
      return <IconWithText className="fa fa-ban" text="Unverified"/>;
    case 'running':
      return <IconWithText className="fa fa-spinner fa-spin" text="Checking"/>;
    case 'pending':
      return <IconWithText className="fa fa-play" text="Ready"/>;
    case 'verified':
      return <IconWithText className="fa fa-check" text="Verified"/>;
  }
}

export default function pendingVerification({ verificationCode, resource: { uri }, status, confirm, cancel }) {
  let metaText = `<meta name="loveit-site-verification" content="${verificationCode}"/>`;
  let targetLink = `http://${uri}`;
  return (
    <div className="message">
      <div className="message-body message-body-new-style">
        <h6 className="title is-6">Verifying <a href={targetLink} target="blank">{uri}</a></h6>
        Copy & Paste HTML snippet in <b>head</b> section of your <b>index.html</b><br/>
        <b>
          <small>{metaText}</small>
        </b>
        <hr/>
        <div className="has-text-centered">
          <VerificationStatus status={status}/>
        </div>
        <hr/>
        <div className="field has-addons has-text-centered">
          <p className="control">
            <button onClick={confirm} className="button is-success">
              <Icon fa="check" text="Verify"/>
            </button>
          </p>
          <p className="control">
            <button onClick={cancel} className="button is-danger is-centered">
              <Icon fa="remove" text="Cancel"/>
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}
