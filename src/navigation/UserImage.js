import React from "react";
import { connect } from "react-redux";
import { componentFactory } from "components/loadingComponent";
import spinnerFactory from "components/spinnerFactory";

let UserImage = ({ avatar }) => {
  return (
    <figure className="image is-rounded is-128x128">
      <img src={avatar}/>
    </figure>
  )
};

UserImage = connect(({ user: { my = {} }}) => my)(componentFactory(UserImage, spinnerFactory(124)));

export default UserImage;
