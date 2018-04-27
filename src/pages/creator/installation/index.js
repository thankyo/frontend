import React, { Fragment } from "react";
import { connect } from 'react-redux';
import Description from "./Description";
import spinnerFactory from "components/spinnerFactory";
import { DibsIcon } from "components/Icon";
import AddSite from "./AddSite";
import GoogleProjects from "./GoogleProjects";
import TumblrProjects from "./TumblrProjects";
import DibsProjects from "./DibsProjects";

const Spinner = spinnerFactory(260);

let UserProjects = () => (
  <ul className="timeline">
    <GoogleProjects/>
    <TumblrProjects/>
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