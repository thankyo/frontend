import React from "react";
import { connect } from "react-redux";
import { InstallIcon } from "components/Icon";
import { projectDibs } from "reducers/project.actions";
import { Field, Form, reduxForm } from "redux-form";
import { flatField, LoadingButton, required, urlFormat } from "components/form/form.utils";

import { reset } from 'redux-form';

const AddSite = ({ handleSubmit, submitting }) => (
  <li className="timeline-item is-primary">
    <div className="timeline-marker is-primary">
    </div>
    <div className="timeline-content">
      <p className="heading">
        We'll try to verify with WHOIS record
      </p>
      <div className="content">
        <Form onSubmit={handleSubmit} className="is-fullwidth" style={{ width: "100%" }}>
          <div className="field has-addons" style={{ flexGrow: 1 }}>
            <div className="control" style={{ flexGrow: 1 }}>
              <Field type="text" className="input is-small" name="url" component={flatField}
                     help="And verify manually if WHOIS did not workout" validate={[required, urlFormat]}/>
            </div>
            <div className="control">
              <LoadingButton className="button is-small is-primary" submitting={submitting}>
                <InstallIcon>Add</InstallIcon>
              </LoadingButton>
            </div>
          </div>
        </Form>
      </div>
    </div>
  </li>
);

const AddSiteForm = reduxForm({ form: "project-dibs" })(AddSite);

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (form) => dispatch(projectDibs(form)).then(() => {
    dispatch(reset("project-dibs"))
  })
});

const AddSiteReduxForm = connect(undefined, mapDispatchToProps)(AddSiteForm);

export default AddSiteReduxForm;