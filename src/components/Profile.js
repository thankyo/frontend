import React from "react";
import { fetchUser } from "reducers/user.actions";
import { connect } from "react-redux";
import { componentFactory } from "components/loadingComponent";
import spinnerFactory from "components/spinnerFactory";

function ImageProfile({ avatar, firstName, lastName }) {
  return (
    <div className="profile has-text-centered">
      <div className="image">
        <figure className="image is-1by1 is-small">
          <img src={avatar} className="is-centered"/>
        </figure>
      </div>
      <div className="subtitle">{firstName} {lastName}</div>
    </div>
  )
}

const mapStateToProps = (state, { id }) => state.user[id];

const mapDispatchToProps = (dispatch, { id }) => {
  dispatch(fetchUser(id));
  return { };
};

//TODO magic numbers are never good
export default connect(mapStateToProps, mapDispatchToProps)(componentFactory(ImageProfile, spinnerFactory(236, "profile has-text-centered")))