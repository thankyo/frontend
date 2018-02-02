import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getProjectsByUser } from "../../reducers/project.actions";

// TODO same Supported in dashboard
function Project({ project, user, isActive }) {
  let { avatar, title, description, _id } = project;
  let to = `/creator/${user}/project/${_id}`;
  return (
    <article className={`media media-new-style ${isActive && "is-active"}`}>
      <div className="media-left">
        <Link to={to}>
          <figure className="image">
            <img src={avatar} width={50} height={50} alt="user picture"/>
          </figure>
        </Link>
      </div>
      <div className="media-content is-active">
        <div className="content is-inverted is-outlined">
          <Link to={to}>
            <strong>{title}</strong>
            <p>{description}</p>
          </Link>
        </div>
      </div>
    </article>
  );
}

const ProjectNavigation = ({ projects, active, user }) => {
  return (
    <div>
      <h1 className="subtitle">All Projects</h1>
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