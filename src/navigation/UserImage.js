import React from "react";
import { connect } from "react-redux";
import { componentFactory } from "components/loadingComponent";
import spinnerFactory from "components/spinnerFactory";
import { getUser } from "reducers/user.actions";

let UserImage = ({ avatar }) => {
  return (
    <figure className="image is-rounded is-128x128">
      <img src={avatar}/>
    </figure>
  )
};

const mapUserImageToProps = (dispatch) => {
  dispatch(getUser("my"));
  return {}
};

UserImage = connect(({ user: { my }}) => my, mapUserImageToProps)(componentFactory(UserImage, spinnerFactory(124)));

export default UserImage;
