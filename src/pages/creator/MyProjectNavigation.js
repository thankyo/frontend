import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getMyProjects } from "../../reducers/project.actions";
import { IconWithText } from "../../common/Icon";

// TODO same Supported in dashboard
function Project({ project, isActive }) {
  let { avatar, title, description, _id } = project;
  return (
    <article className={`media media-new-style ${isActive && "is-active"}`}>
      <div className="media-left">
        <Link to={`/creator/my/project/${_id}`}>
          <figure className="image">
            <img src={avatar} width={50} height={50} alt="user picture"/>
          </figure>
        </Link>
      </div>
      <div className="media-content is-active">
        <div className="content is-inverted is-outlined">
          <Link to={`/creator/my/project/${_id}`}>
            <strong>{title}</strong>
            <p>{description}</p>
          </Link>
        </div>
      </div>
    </article>
  );
}

function AddProject() {
  return (
    <Link to="/integration">
      <figure className="image">
        <IconWithText className="fa fa-plus" text="Add"/>
      </figure>
    </Link>
  );
}

const ProjectNavigation = ({ projects, active }) => {
  return (
    <div>
      <h1 className="subtitle">My Projects</h1>

      {projects.map((project, i) => <Project key={i} project={project} isActive={project._id === active}/>)}
      <br/>
      <AddProject/>
    </div>
  );
};

const mapStateToProps = ({ project: { all } }) => ({ projects: all });

const mapDispatchToProps = (dispatch) => {
  dispatch(getMyProjects());
  return {
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectNavigation);