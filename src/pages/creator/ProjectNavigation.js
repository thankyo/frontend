import React from "react";
import { connect } from "react-redux";
import { getProjectsByUser } from "reducers/project.actions";
import Project from "components/Projects/ProjectNav";

const ProjectNavigation = ({ projects, active, user }) => {
  return (
    <div>
      <h1 className="subtitle">Projects</h1>
      {projects.map((project, i) => <Project key={i} project={project} user={user} isActive={project._id === active}/>)}
    </div>
  );
};

const mapStateToProps = ({ project: { byUser } }, { user }) => byUser[user] || { projects: [] };

const mapDispatchToProps = (dispatch, { user }) => {
  dispatch(getProjectsByUser(user));
  return {
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectNavigation);