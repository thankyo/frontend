import React, {Component} from "react";
import Icon from "../../components/Icon";

export default class PendingVerification extends Component {
    render() {
        let metaText = `<meta name='loveit-site-verification" content="${this.props.verificationCode}"/>`;
        let targetLink = `//${this.props.resource.uri}`
        return (
            <div>
                <div className="content">
                    <ol>
                        <li className="subtitle">
                            Target URL is<br/>
                            <small><a href={targetLink} target="blank">{this.props.resource.uri}</a></small>
                        </li>
                        <li className="subtitle">
                            Copy & Paste HTML snippet in head section of your index.html<br/>
                            <b><small>{metaText}</small></b>
                        </li>
                        <li className="subtitle">
                            <a onClick={this.props.confirm}>Confirm</a><br/>
                            <small>We'll verify changes in seconds.</small>
                        </li>
                    </ol>
                </div>
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
