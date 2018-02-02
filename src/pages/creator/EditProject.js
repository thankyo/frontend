import React from 'react';
import { connect } from "react-redux";

// TODO same Supported in dashboard
function EditProject({ project, id }) {
  return (
    <h1>I'm a project {id}</h1>
  );
}

export default connect()(EditProject);