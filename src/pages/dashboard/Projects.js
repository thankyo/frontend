import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Icon } from "../../common/Icon";
import { get } from "../../reducers/thank/resource.actions";


function Project({ avatar, firstName, lastName, bio, link, id }) {
  return (
    <article className="media media-new-style">
      <div className="media-left">
        <figure className="image">
          <img src={avatar} width={50} height={50} alt="user picture"/>
        </figure>
      </div>
      <div className="media-content">
        <div className="content is-inverted is-outlined">
          <strong>{firstName} {lastName}</strong>
          <p>{bio}</p>
        </div>
      </div>
      <a>
        <Icon className="fa fa-edit"/>
      </a>
    </article>
  );
}

function AddProject() {
  return (
    <div className="has-text-centered">
      <Link to="/integration" className="button is-primary">
        Add project
      </Link>
    </div>
  );
}

const ListOfProjects = ({ projects }) => {
  return (
    <div>
      <h1 className="subtitle">Projects</h1>
      {projects.map((project, id) => <Project key={id} {... project}/>)}
      <AddProject/>
    </div>
  );
};

const mapStateToProps = ({ thank: { resource } }, { id }) => {
  let projects = resource[id] ? resource[id].owns : [];
  return {
    projects
  };
};

const mapDispatchToProps = (dispatch, { id }) => {
  dispatch(get(id));
  return {}
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListOfProjects);