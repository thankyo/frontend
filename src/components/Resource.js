import React, {Component} from "react";
import PropTypes from "prop-types";
import { IconWithText } from "./Icon";

class HttpResourceIcon extends Component {
    render() {
        return (
            <IconWithText className="fa fa-html5" text={this.props.uri}/>
        );
    }
}

HttpResourceIcon.propTypes = {
    uri: PropTypes.string.isRequired
};

export default class Resource extends Component {
    static http(uri) {
        return (
          <a href={`https://${uri}`}>{uri}</a>
        )
    }
    static social(provider, uri) {
        return (<IconWithText className={`fa fa-${provider}`} text={uri}/>)
    }
    render() {
        if (this.props.resource.type === "http")
            return Resource.http(this.props.resource.uri);
        else
            return Resource.social(this.props.resource.provider, this.props.resource.uri);
    }
}

Resource.propTypes = {
    resource: PropTypes.object.isRequired
};