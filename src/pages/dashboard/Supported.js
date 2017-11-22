import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getSupportedByMe } from "../../reducers/thank/supported.actions";

function Supported({ avatar, firstName, lastName, bio, link, id }) {
  return (
    <article className="media media-new-style">
      <div className="media-left">
        <Link to={`/creator/${id}`}>
          <figure className="image">
            <img src={avatar} width={50} height={50} alt="user picture"/>
          </figure>
        </Link>
      </div>
      <div className="media-content">
        <div className="content is-inverted is-outlined">
          <a href={link}><strong>{firstName} {lastName}</strong></a>
          <p>{bio}</p>
        </div>
      </div>
    </article>
  );
}

const ListOfSupported = ({ supported }) => {
  if (supported.length === 0) {
    return null
  }
  return (
    <div>
      <h1 className="subtitle">Supported projects</h1>
      {supported.map((supported, id) => <Supported key={id} {...supported}/>)}
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