import React, { Fragment } from "react";
import { connect } from "react-redux";
import WordPress from "./Wordpress";
import Manual from "./Manual";
import { getProject } from "reducers/project.actions";

const InstallationPage = ({ url }) => (
  <Fragment>
    <WordPress url={url}/>
    <Manual url={url}/>
  </Fragment>
);

const mapStateToProps = ({ project: { byId }}, { id }) => byId[id];
const mapDispatchToProps = (dispatch, { id }) => {
  dispatch(getProject(id))
};

export default connect(mapStateToProps, mapDispatchToProps)(InstallationPage);
