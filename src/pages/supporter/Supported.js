import React from "react";
import { connect } from "react-redux";
import { getSupportedByMe } from "../../reducers/thank/supported.actions";

function Supported({ firstName, lastName }) {
  return (
    <div>
      <div className="title">{firstName} {lastName}</div>
    </div>
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