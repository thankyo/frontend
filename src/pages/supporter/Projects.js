import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getSupportedByMe } from "../../reducers/thank/supported.actions";
import { Icon } from "../../common/Icon";

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

const ListOfProjects = ({ supported: projects }) => {
  if (projects.length === 0) {
    return null
  }
  return (
    <div>
      <h1 className="subtitle">Projects</h1>
      {projects.map((supported, id) => <Project key={id} {...supported}/>)}
      <hr/>
      <div className="has-text-centered">
        <a className="button is-primary">
          Add project
        </a>
      </div>
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
)(ListOfProjects);