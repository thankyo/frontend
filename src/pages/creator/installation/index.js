import React, { Fragment } from "react";
import { connect } from 'react-redux';
import Description from "./Description";
import spinnerFactory from "components/spinnerFactory";
import { DibsIcon } from "components/Icon";
import AddSite from "./AddSite";
import GoogleProjects from "./GoogleProjects";

const Spinner = spinnerFactory(260);

let UserProjects = ({ installed }) => (
  <ul className="timeline">
    <GoogleProjects/>
    <li className="timeline-item is-primary"/>
    <li className="timeline-header is-success">
        <span className="tag is-primary">
          <DibsIcon>Dibs</DibsIcon>
        </span>
    </li>
    <AddSite/>
    {/*<PendingProjects projects={pending}/>*/}
    <li className="timeline-item is-primary"/>
    {/*<InstalledProjects projects={installed}/>*/}
  </ul>
)

function InstallationPage({ pending, owned, installed, isLoading }) {
  return (
    <Fragment>
      <Description/>
      <br/>
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