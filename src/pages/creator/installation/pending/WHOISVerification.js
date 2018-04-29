import React, { Fragment } from "react";
import Resource from "components/Resource";
import { DeleteIcon, InstallIcon, EmailIcon } from "components/Icon";
import WebStackMarker from "./WebStackMarker";
import RefreshLink from "components/RefreshLink";
import { deleteDibs, reSendWHOISVerification } from "reducers/project.actions";
import { connect } from "react-redux";
import { bindToActions } from "reducers/util/action";
import DeleteButton from "./DeleteButton";

const WHOISVerification = ({ data: { whoisEmail, url, webStack, verified }, next, deleteOwnedProject, reSendWHOISVerification }) => {
  if (!whoisEmail || verified ) {
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
            If you have privacy enabled in your Domain Name Registrar, it might still work<br/>
            continue without verification, otherwise.
          </div>
          <hr/>
          <div className="field has-addons">
            <div className="control">
              <div className="button is-small is-primary is-outlined" onClick={next}>
                <InstallIcon>Install</InstallIcon>
              </div>
            </div>
            <div className="control">
              <RefreshLink className="button is-small is-primary is-outlined" onClick={() => reSendWHOISVerification({ url })}>
                <EmailIcon>Resend</EmailIcon>
              </RefreshLink>
            </div>
          </div>
        </div>
      </div>
      <DeleteButton onDelete={() => deleteOwnedProject({ url })}/>
    </Fragment>
  );
};

export default connect(undefined, bindToActions({ deleteOwnedProject: deleteDibs, reSendWHOISVerification }))(WHOISVerification);