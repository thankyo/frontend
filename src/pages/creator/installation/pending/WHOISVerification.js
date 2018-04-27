import React, { Fragment } from "react";
import Resource from "components/Resource";
import { DeleteIcon, InstallIcon } from "components/Icon";
import WebStackMarker from "./WebStackMarker";
import RefreshLink from "components/RefreshLink";
import { deleteOwnedProject } from "reducers/project.actions";
import { connect } from "react-redux";
import { bindToActions } from "reducers/util/action";

const WHOISVerification = ({ data: { whoisEmail, url, webStack }, next, deleteOwnedProject }) => {
  if (!whoisEmail) {
    next();
    return <div/>
  }
  return (
    <Fragment>
      <div className="timeline-item is-primary is-large">
        <WebStackMarker webStack={webStack}/>
        <div className="timeline-content">
          <p className="heading">
            <Resource url={url}/>
          </p>
          <br/>
          Verification link sent to WHOIS record contact email <a href={`mailto:${whoisEmail}`}><b>{whoisEmail}</b></a><br/>
          <div className="is-size-7">
            If you have privacy enabled in your Domain Name Registrar, it might still work,
            continue without verification, otherwise.
          </div>
          <hr/>
          <div className="button is-small is-primary" onClick={next}>
            <InstallIcon>Install</InstallIcon>
          </div>
        </div>
      </div>
      <header className="timeline-header is-success">
        <RefreshLink className="button is-danger is-small" onClick={() => deleteOwnedProject({ url })}>
          <DeleteIcon>Delete</DeleteIcon>
        </RefreshLink>
      </header>
    </Fragment>
  );
};

export default connect(undefined, bindToActions({ deleteOwnedProject }))(WHOISVerification);