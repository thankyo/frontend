import React, { Component } from "react";
import PropTypes from "prop-types";
import { Icon } from "./Icon";

const HttpResourceIcon = (uri) => (<Icon className="fa fa-html5">{uri}</Icon>)

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
    return (<Icon className={`fa fa-${provider}`}>{uri}</Icon>)
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