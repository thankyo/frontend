import React, { Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { DibsIcon, InstallIcon } from "components/Icon";
import { enrichProject } from "reducers/project.actions";
import { Field, Form, reduxForm } from "redux-form";
import { flatField, LoadingButton } from "components/form/form.utils";

const AddSite = ({ handleSubmit, submitting }) => (
  <Fragment>
    <li className="timeline-header is-success">
        <span className="tag is-primary">
          <DibsIcon>Dibs</DibsIcon>
        </span>
    </li>
    <li className="timeline-item is-primary">
      <div className="timeline-marker is-primary">
      </div>
      <div className="timeline-content">
        <p className="heading">
          We'll trust that you own the site
        </p>
        <div className="content">
        <Form onSubmit={handleSubmit} className="is-fullwidth" style={{ width: "100%" }}>
          <div className="field has-addons" style={{ flexGrow: 1 }}>
            <div className="control" style={{ flexGrow: 1 }}>
              <Field type="text" className="input is-small" name="url" component={flatField} help="We'll verify manually later on"/>
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
  </Fragment>
);

const AddSiteForm = reduxForm({ form: "project-add" })(AddSite);

const AddSiteReduxForm = connect(undefined, (dispatch) => bindActionCreators({ onSubmit: enrichProject }, dispatch))(AddSiteForm);

export default AddSiteReduxForm;