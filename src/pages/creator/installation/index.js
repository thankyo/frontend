import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import WordPress from "./Wordpress";
import Manual from "./Manual";
import { getProject } from "reducers/project.actions";

export default class InstallationPage extends Component{
  constructor(props) {
    super(props);

  }
  render() {
    let { url, webStack } = this.props;
    return (webStack === "WordPress" ? <WordPress/> : <Manual/>);
  }
}