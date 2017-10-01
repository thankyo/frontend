import React from "react";
import auth from "../../reducers/util/auth";

export default function AuthPage({ history }) {
  auth.authWithFacebook(window.location.search).then(auth => history.push("/supporter/my"));
  return (
    <div>
      <div className="pageloader is-active"/>
    </div>
  );
}