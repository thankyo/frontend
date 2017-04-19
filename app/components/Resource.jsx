import React, {Component} from "react";
import PropTypes from "prop-types";

class HttpResourceIcon extends Component {
    render() {
        return (
            <span className="content icon is-loading">
                <i className="fa fa-html5"></i>
            </span>
        );
    }
}

HttpResourceIcon.propTypes = {
    uri: PropTypes.string.isRequired
};

export default class Resource extends Component {
    http(uri) {
        return (
            <p>
                <HttpResourceIcon uri={uri}/>{uri}
            </p>
        )
    }
    social(provider, uri) {
        return (
            <p>
                <i className={`fa fa-${provider}`}></i> {uri}
            </p>
        )
    }
    render() {
        if (this.props.resource.type === "http")
            return this.http(this.props.resource.uri);
        else
            return this.social(this.props.resource.provider, this.props.resource.uri);
    }
}

Resource.propTypes = {
    resource: PropTypes.object.isRequired
};