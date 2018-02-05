import React from "react";
import { connect } from "react-redux";
import { getSupportedByMe } from "reducers/thank/supported.actions";

import ProjectNav from "components/Projects/ProjectNav";

const ListOfSupported = ({ supported }) => {
  if (supported.length === 0) {
    return null
  }
  return (
    <div>
      <h1 className="subtitle">Supported projects</h1>
      {supported.map((project, id) => <ProjectNav key={id} project={project} isActive={false} to={`/creator/${project.user}/project/${project._id}`}/>)}
    </div>
  );
};

const mapStateToProps = ({ thank: { supported } }) => {
  supported = supported ? supported : [];
  return {
    supported
  };
};

const mapDispatchToProps = (dispatch, { id }) => {
  dispatch(getSupportedByMe(id));
  return {}
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListOfSupported);