import React from "react";
import { connect } from "react-redux";
import { getSupportedByMe } from "../../reducers/thank/supported.actions";

function Supported({ avatar, firstName, lastName, bio }) {
  return (
    <a href="#" className="media media-new-style">
      <div className="media-left">
        <figure className="image">
          <img src={avatar} width="50" height="50" alt="user picture"/>
        </figure>
      </div>
      <div className="media-content">
        <div className="content">
          <strong>{firstName} {lastName}</strong>
          <p>{ bio }</p>
        </div>
      </div>
      <i className="fa fa-angle-right"></i>
    </a>
  );
}

const ListOfSupported = ({ supported }) => {
  return (
    <div className="message">
      <div className="message-body">
        {supported.map((supported, id) => <Supported key={id} {... supported}/>)}
      </div>
    </div>
  );
};

const mapStateToProps = ({ thank: { supported } }, { id }) => {
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