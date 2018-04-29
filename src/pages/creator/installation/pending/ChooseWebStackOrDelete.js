import React, { Fragment } from "react";
import Resource from "components/Resource";
import { DeleteIcon, InstallIcon } from "components/Icon";
import Instructions from "./instruction";
import WebStackMarker from "./WebStackMarker";

import { deleteOwnedProject } from "reducers/project.actions";
import { connect } from "react-redux";
import { bindToActions } from "reducers/util/action";
import DeleteButton from "./DeleteButton";

const ChooseWebStackOrDelete = ({ data: { url, webStack, verified }, next, deleteOwnedProject }) => (
  <Fragment>
    <div className="timeline-item is-primary is-large">
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
    </div>
    {!verified && <DeleteButton onDelete={() => deleteOwnedProject({ url })}/>}
  </Fragment>
);

export default connect(undefined, bindToActions({ deleteOwnedProject }))(ChooseWebStackOrDelete);