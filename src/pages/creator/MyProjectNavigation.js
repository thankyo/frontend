import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getMyProjects, setActiveProject } from "../../reducers/project.actions";
import { IconWithText } from "../../common/Icon";

// TODO same Supported in dashboard
function Project({ project, setActiveProject, isActive }) {
  let { avatar, title, description } = project
  return (
    <article className={`media media-new-style ${isActive && "is-active"}`}>
      <div className="media-left">
        <a onClick={() => setActiveProject(project)}>
          <figure className="image">
            <img src={avatar} width={50} height={50} alt="user picture"/>
          </figure>
        </a>
      </div>
      <div className="media-content is-active">
        <div className="content is-inverted is-outlined">
          <a onClick={() => setActiveProject(project)}>
            <strong>{title}</strong>
            <p>{description}</p>
          </a>
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

const ProjectNavigation = ({ projects, active, setActiveProject }) => {
  return (
    <div>
      <h1 className="subtitle">My Projects</h1>

      {projects.map((project, i) => <Project key={i} project={project} setActiveProject={setActiveProject} isActive={project === active}/>)}
      <br/>
      <AddProject/>
    </div>
  );
};

const mapStateToProps = ({ project: { all, active } }) => ({ projects: all, active });

const mapDispatchToProps = (dispatch) => {
  dispatch(getMyProjects());
  return {
    setActiveProject: (project) => dispatch(setActiveProject(project))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectNavigation);