import React, {Component} from "react";
import PropTypes from "prop-types";
import Icon from "components/Icon";

class HttpResourceIcon extends Component {
    render() {
        return (
            <Icon fa="html5" text={this.props.uri}/>
        );
    }
}

HttpResourceIcon.propTypes = {
    uri: PropTypes.string.isRequired
};

export default class Resource extends Component {
    http(uri) {
        return (
            <div className="field has-addons">
                <Icon fa="html5" text={uri}/>
            </div>
        )
    }
    social(provider, uri) {
        return (<Icon fa={provider} text={uri}/>)
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