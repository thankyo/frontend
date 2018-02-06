import React from "react";
import { connect } from "react-redux";
import { getSupportedByMe } from "reducers/project.actions";

import ProjectNav from "components/ProjectNav";

const ListOfSupported = ({ projects = []}) => {
  if (projects.length === 0) {
    return null
  }
  return (
    <div>
      <h1 className="subtitle">Supported projects</h1>
      {projects.map((project, id) => <ProjectNav key={id} project={project} isActive={false} to={`/creator/${project.user}/project/${project._id}`}/>)}
    </div>
  );
};

const mapStateToProps = ({ project: { supported: { my = [] }, byId } }) => ({ projects: my.map(id => byId[id] )});

const mapDispatchToProps = (dispatch, { id }) => {
  dispatch(getSupportedByMe(id));
  return {}
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListOfSupported);