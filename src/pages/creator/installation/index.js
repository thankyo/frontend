import React, { Fragment } from "react";
import { connect } from "react-redux";
import WordPress from "./Wordpress";
import Manual from "./Manual";
import { getProject } from "reducers/project.actions";

const InstallationPage = ({ resource }) => (
  <Fragment>
    <WordPress url={resource}/>
    <Manual url={resource}/>
  </Fragment>
);

const mapStateToProps = ({ project: { byId }}, { id }) => byId[id];
const mapDispatchToProps = (dispatch, { id }) => {
  dispatch(getProject(id))
};

export default connect(mapStateToProps, mapDispatchToProps)(InstallationPage);
