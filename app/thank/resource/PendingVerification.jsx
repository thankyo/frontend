import React, {Component} from "react";
import Icon from "../../components/Icon";

class VerificationStatus extends Component {
    notVerified() {
        return (
            <b>
                <Icon fa="ban"/>
                <span>Unverified</span>
            </b>
        )
    }
    pending() {
        return (
            <b>
                <Icon fa="play"/>
                <span>Ready</span>
            </b>
        )
    }
    running() {
        return (
            <b>
                <Icon fa="spinner fa-spin"/>
                <span>Checking</span>
            </b>
        )
    }
    verified() {
        return (
            <b>
                <Icon fa="check"/>
                <span>Verified</span>
            </b>
        )
    }
    render() {
        switch (this.props.status) {
            case 'notVerified' :
                return (
                    <div className="container has-text-centered">
                        {this.notVerified()}
                    </div>
                );
            case 'running':
                return (
                    <div className="container has-text-centered">
                        {this.running()}
                    </div>
                );
            case 'pending':
                return (
                    <div className="container has-text-centered">
                        {this.pending()}
                    </div>
                );
            case 'verified':
                return (
                    <div className="container has-text-centered">
                        {this.verified()}
                    </div>
                )
            default:
                return (
                    <div className="container has-text-centered">
                        <b>{this.props.status}</b>
                    </div>
                );
        }
    }
}

export default class PendingVerification extends Component {
    render() {
        let metaText = `<meta name="loveit-site-verification" content="${this.props.verificationCode}"/>`;
        let targetLink = `http://${this.props.resource.uri}`;
        return (
            <div>
                <div className="content">
                    <ol>
                        <li className="subtitle">
                            Target URL is<br/>
                            <small><a href={targetLink} target="blank">{this.props.resource.uri}</a></small>
                        </li>
                        <li className="subtitle">
                            Copy & Paste HTML snippet in <b>head</b> section of your <b>index.html</b><br/>
                            <b><small>{metaText}</small></b>
                        </li>
                        <li className="subtitle">
                            <a onClick={this.props.confirm}>Confirm</a><br/>
                            <small>We'll verify in seconds.</small><br/>
                        </li>
                    </ol>
                </div>
                <hr/>
                <VerificationStatus status={this.props.status}/>
                <hr/>
                <div className="field has-addons is-centered pull-right">
                    <p className="control">
                        <button onClick={this.props.confirm} className="button is-success">
                            <Icon fa="check"/><span>Confirm</span>
                        </button>
                    </p>
                    <p className="control">
                        <button onClick={this.props.cancel} className="button is-danger is-centered">
                            <Icon fa="remove"/><span>Cancel</span>
                        </button>
                    </p>
                </div>
            </div>
        )
    }
}
