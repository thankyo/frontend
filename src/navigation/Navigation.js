import React from "react";
import AuthenticatedNavigation from "./AuthenticatedNavigation";
import { connect } from "react-redux";
import AnonymousNavigation from "./AnonymousNavigation";

let Navigation = ({ isAuthenticated }) => isAuthenticated ? <AuthenticatedNavigation/> : <AnonymousNavigation/>;


export default connect(({ auth }) => auth)(Navigation);