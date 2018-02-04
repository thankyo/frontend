import React from "react";
import auth from "reducers/util/auth";

export default function AuthPage({ history }) {
  auth.authWithFacebook(history);
  return (
    <div>
      <div className="pageloader is-active"/>
    </div>
  );
}