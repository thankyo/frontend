import React, { Fragment } from "react";
import { connect } from "react-redux";
import { getProjectsByUser } from "reducers/project.actions";
import ProjectNav from "components/ProjectNav";

const ProjectNavigation = ({ projects, active, user }) => {
  return (
    <Fragment>
      <h1 className="subtitle">Active</h1>
      {projects.map((project, i) => <ProjectNav key={i} project={project} user={user} isActive={project._id === active} to={`/creator/${user}/project/${project._id}`}/>)}
    </Fragment>
  );
};

const mapStateToProps = ({ project: { byUser, byId } }, { user }) => {
  let projectIds = byUser[user] || [];
  return { projects: projectIds.map(id => byId[id]) };
};

const mapDispatchToProps = (dispatch, { user }) => {
  dispatch(getProjectsByUser(user));
  return {
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectNavigation);