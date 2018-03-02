import React, { Fragment } from "react";
import { connect } from "react-redux";
import WordPress from "./Wordpress";
import Manual from "./Manual";
import { getProject } from "reducers/project.actions";

const InstallationPage = ({ url, webStack }) => (webStack === "WordPress" ? <WordPress url={url}/> : <Manual url={url}/>);

export default InstallationPage;
