import React from "react";
import { connect } from "react-redux";
import { InstallIcon } from "components/Icon";
import { enrichProject } from "reducers/project.actions";
import { Field, Form, reduxForm } from "redux-form";
import { flatField, LoadingButton, required, urlFormat } from "components/form/form.utils";
import ChooseWebStack from "./pending/ChooseWebStack";
import { stepByStep } from "components/timeline/util";
import PostAddingExplanation from "./pending/PostAddingExplanation";
import FinishInstallation from "./pending/FinishInstallation";

const AddSite = ({ handleSubmit, submitting }) => (
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
              <Field type="text" className="input is-small" name="url" component={flatField}
                     help="We'll verify manually later on" validate={[required, urlFormat]}/>
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

const AddSiteForm = reduxForm({ form: "project-add" })(AddSite);

const mapDispatchToProps = (dispatch, { next }) => ({
  onSubmit: (form) => dispatch(enrichProject(form)).then(() => next())
});

const AddSiteReduxForm = connect(undefined, mapDispatchToProps)(AddSiteForm);

export default connect(({ project: { dibs } }) => dibs)(stepByStep(AddSiteReduxForm, ChooseWebStack, PostAddingExplanation, FinishInstallation));