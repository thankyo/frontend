import React from "react";
import { connect } from "react-redux";
import { InstallIcon } from "components/Icon";
import { projectByEmail } from "reducers/project.actions";
import { Field, Form, reduxForm } from "redux-form";
import { customInput, SubmitButton } from "components/form/form.utils";
import { emailFormat, required } from "components/form/validation";

import { reset } from 'redux-form';

const EmailSubmitButton = ({ submitting }) => (
  <SubmitButton className="button is-small is-primary" submitting={submitting}>
    <InstallIcon>Add</InstallIcon>
  </SubmitButton>
);

let EmailVerifiedForm = ({ handleSubmit, submitting }) => (
  <li className="timeline-item is-primary">
    <div className="timeline-marker is-primary">
    </div>
    <div className="timeline-content">
      <p className="heading">
        We'll send you verification link
      </p>
      <div className="content">
        <Form onSubmit={handleSubmit}>
          <Field
            name="email"
            type="email"
            component={customInput}
            validate={[required, emailFormat]}
            addon={<EmailSubmitButton submitting={submitting}/>}
            isSmall
          />
        </Form>
      </div>
    </div>
  </li>
);

EmailVerifiedForm = reduxForm({ form: "project-email" })(EmailVerifiedForm);

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (form) => dispatch(projectByEmail(form)).then(() => {
    dispatch(reset("project-email"))
  })
});

const EmailVerification = connect(undefined, mapDispatchToProps)(EmailVerifiedForm);

export default EmailVerification;