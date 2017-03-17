import React, {Component, PropTypes} from "react";

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
    facebook(uri) {
        return (
            <span className="icon is-small">
                <i className="fa fa-heart"></i> {uri}
            </span>
        )
    }
    render() {
        if (this.props.resource.type === "facebook")
            return this.facebook(this.props.resource.uri);
        else
            return this.http(this.props.resource.uri);
    }
}

Resource.propTypes = {
    resource: PropTypes.object.isRequired
};