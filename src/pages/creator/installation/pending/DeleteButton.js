import React from "react";
import { DeleteIcon } from "components/Icon";
import RefreshLink from "components/RefreshLink";

const DeleteButton = ({ onDelete }) => (
  <header className="timeline-header is-success">
    <RefreshLink className="button is-small is-danger" onClick={onDelete}>
      <DeleteIcon>Delete</DeleteIcon>
    </RefreshLink>
  </header>
);

export default DeleteButton;