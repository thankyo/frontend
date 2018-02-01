import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getMyProjects } from "../../reducers/thank/project.actions";
import { Icon } from "../../common/Icon";


function Project({ resource: { type, uri } }) {
  return (
    <li className="active">
      <a>{uri}</a>
    </li>
  );
}

function AddProject() {
  return (
    <li>
      <Link to="/integration">
        <Icon className="fa fa-plus"/>
      </Link>
    </li>
  );
}

const ProjectNavigation = ({ projects }) => {
  return (
    <div>
      <h1 className="subtitle">Projects</h1>
      <div className="tabs">
        {projects.map((project, id) => <Project key={id} {... project}/>)}
        <AddProject/>
      </div>
      <br/>
    </div>
  );
};

const mapStateToProps = ({ thank: { project: { my } } }) => ({ projects: my });

const mapDispatchToProps = (dispatch) => {
  dispatch(getMyProjects());
  return {
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectNavigation);