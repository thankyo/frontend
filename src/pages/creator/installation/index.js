import React, { Fragment } from "react";
import { connect } from 'react-redux';
import { getOwnedProjects } from "reducers/project.actions";
import Description from "./Description";
import PendingProjects from "./PendingProjects";
import InstalledProjects from "./InstalledProjects";
import spinnerFactory from "components/spinnerFactory";
import { DibsIcon } from "components/Icon";
import AddSite from "./AddSite";

const Spinner = spinnerFactory(260);

function UserProjects({ pending, installed }) {
  if (pending.length === 0 && installed.length === 0) {
    return <ul className="timeline">
      <li className="timeline-header is-success">
        <span className="tag is-primary">
          <DibsIcon>Dibs</DibsIcon>
        </span>
      </li>
      <AddSite/>
      <li className="timeline-item is-primary"/>
      <li className="timeline-item is-primary">
        <div className="timeline-marker is-medium is-primary"/>
        <div className="timeline-content">
          <p className="heading">No resources registered</p>
        </div>
      </li>
    </ul>
  }
  return (
    <ul className="timeline">
      <li className="timeline-header is-success">
        <span className="tag is-primary">
          <DibsIcon>Dibs</DibsIcon>
        </span>
      </li>
      <AddSite/>
      <li className="timeline-item is-primary"/>
      <PendingProjects projects={pending}/>
      <li className="timeline-item is-primary"/>
      <InstalledProjects projects={installed}/>
    </ul>
  )
}

function InstallationPage({ pending, owned, installed, isLoading }) {
  return (
    <Fragment>
      <Description/>
      <br/>
      {isLoading ? <Spinner/> : <UserProjects pending={pending} installed={installed}/>}
    </Fragment>
  );
}

const mapStateToProps = ({ project: { owned, byId } } ) => ({
  installed: owned.installed.map(id => byId[id]),
  owned: owned.owned || [],
  pending: owned.pending,
  isLoading: owned.isLoading
});

const mapDispatchToProps = (dispatch) => {
  dispatch(getOwnedProjects());
  return {
    refreshProject: () => dispatch(refreshMyProjects()),
    refresh: () => dispatch(getOwnedProjects())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InstallationPage);