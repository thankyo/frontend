import React, { Component } from "react";
import Icon from "../../Icon";

class VerificationStatus extends Component {
  render() {
    let icon = this.props.status;
    switch (this.props.status) {
      case 'notVerified' :
        icon = <Icon fa="ban" text="Unverified"/>;
        break;
      case 'running':
        icon = <Icon fa="spinner fa-spin" text="Checking"/>;
        break;
      case 'pending':
        icon = <Icon fa="play" text="Ready"/>;
        break;
      case 'verified':
        icon = <Icon fa="check" text="Verified"/>;
        break;
    }
    return (
      <div className="has-text-centered">
        <b>{icon}</b>
      </div>
    )
  }
}

export default class PendingVerification extends Component {
  render() {
    let metaText = `<meta name="loveit-site-verification" content="${this.props.verificationCode}"/>`;
    let targetLink = `http://${this.props.resource.uri}`;
    return (
      <div className="message">
        <div className="message-body message-body-new-style">
          <h6 className="title is-6">Verifying <a href={targetLink} target="blank">{this.props.resource.uri}</a></h6>
          Copy & Paste HTML snippet in <b>head</b> section of your <b>index.html</b><br/>
          <b>
            <small>{metaText}</small>
          </b>
          <hr/>
          <VerificationStatus status={this.props.status}/>
          <hr/>
          <div className="field has-addons has-text-centered">
            <p className="control">
              <button onClick={this.props.confirm} className="button is-success">
                <Icon fa="check" text="Verify"/>
              </button>
            </p>
            <p className="control">
              <button onClick={this.props.cancel} className="button is-danger is-centered">
                <Icon fa="remove" text="Cancel"/>
              </button>
            </p>
          </div>
        </div>
      </div>
    )
  }
}
