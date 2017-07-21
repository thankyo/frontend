import React, { Component } from "react";
import Icon from "../../components/Icon";

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
      <div className="container has-text-centered">
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
      <div>
          <div className="content">
              <h4 className="title is-4">Verifying <a href={targetLink} target="blank">{this.props.resource.uri}</a>
              </h4>
              <ol>
                  <li className="subtitle">
                      Copy & Paste HTML snippet in <b>head</b> section of your <b>index.html</b><br/>
                      <b>
                          <small>{metaText}</small>
                      </b>
                  </li>
                  <li className="subtitle">
                      <a onClick={this.props.confirm}>Confirm</a><br/>
                      <small>We'll verify in seconds.</small>
                      <br/>
                  </li>
              </ol>
          </div>
          <hr/>
          <VerificationStatus status={this.props.status}/>
          <hr/>
          <div className="field has-addons is-centered pull-right">
              <p className="control">
                  <button onClick={this.props.confirm} className="button is-success">
                      <Icon fa="check" text="Confirm"/>
                  </button>
              </p>
              <p className="control">
                  <button onClick={this.props.cancel} className="button is-danger is-centered">
                      <Icon fa="remove" text="Cancel"/>
                  </button>
              </p>
          </div>
      </div>
    )
  }
}
