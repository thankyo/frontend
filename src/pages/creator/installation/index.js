import React, { Fragment } from "react";
import { connect } from 'react-redux';
import spinnerFactory from "components/spinnerFactory";
import GoogleProjects from "./GoogleProjects";
import TumblrProjects from "./TumblrProjects";
import DibsProjects from "./DibsProjects";
import EmailVerifiedProjects from "./EmailVerifiedProjects";

const Spinner = spinnerFactory(260);

let UserProjects = () => (
  <ul className="timeline">
    <GoogleProjects/>
    <TumblrProjects/>
    <EmailVerifiedProjects/>
    <DibsProjects/>
  </ul>
);

function InstallationPage({ pending, owned, installed, isLoading }) {
  return (
    <Fragment>
      <h1 className="subtitle">Installation</h1>
      {isLoading ? <Spinner/> : <UserProjects pending={pending} installed={installed}/>}
    </Fragment>
  );
}

const mapStateToProps = ({ project: { owned, byId } }) => ({
  installed: owned.installed.map(id => byId[id]),
  owned: owned.owned || [],
  pending: owned.pending,
  isLoading: owned.isLoading
});

export default connect(mapStateToProps)(InstallationPage);