import React, { Fragment } from "react";
import Resource from "components/Resource";
import { DeleteIcon, InstallIcon } from "components/Icon";
import Instructions from "./instruction";
import WebStackMarker from "./WebStackMarker";

import { deleteOwnedProject } from "reducers/project.actions";
import { connect } from "react-redux";
import { bindToActions } from "reducers/util/action";
import RefreshLink from "components/RefreshLink";

const ChooseWebStackOrDelete = ({ data: { url, webStack }, next, deleteOwnedProject }) => (
  <Fragment>
    <li className="timeline-item is-primary is-large">
      <WebStackMarker webStack={webStack}/>
      <div className="timeline-content">
        <p className="heading">
          <Resource url={url}/>
        </p>
        <Instructions url={url} webStack={webStack}/>
        <br/>
        <div className="button is-small is-primary" onClick={next}>
          <InstallIcon>Next</InstallIcon>
        </div>
      </div>
    </li>
    <li className="timeline-header is-success">
      <RefreshLink className="button is-small is-danger" onClick={() => deleteOwnedProject({ url })}>
        <DeleteIcon>Delete</DeleteIcon>
      </RefreshLink>
    </li>
  </Fragment>
);

export default connect(undefined, bindToActions({ deleteOwnedProject }))(ChooseWebStackOrDelete);