import React from "react";
import { connect } from "react-redux";
import { getProjectsByUser } from "reducers/project.actions";
import ProjectNav from "components/Projects/ProjectNav";

const ProjectNavigation = ({ projects, active, user }) => {
  return (
    <div>
      <h1 className="subtitle">Projects</h1>
      {projects.map((project, i) => <ProjectNav key={i} project={project} user={user} isActive={project._id === active} to={`/creator/${user}/project/${project._id}`}/>)}
    </div>
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