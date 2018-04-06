import React from "react";
import AuthenticatedNavigation from "./AuthenticatedNavigation";
import { connect } from "react-redux";
import AnonymousNavigation from "./AnonymousNavigation";

let Navigation = ({ isAuthenticated }) => (
  <section className="hero is-small is-primary">
    {isAuthenticated ? <AuthenticatedNavigation/> : <AnonymousNavigation/>}
  </section>
);


export default connect(({ auth }) => auth)(Navigation);