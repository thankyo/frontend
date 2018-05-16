import React from "react";
import { Field, Form, reduxForm } from "redux-form";
import { customInput, SubmitButton } from "components/form";
import { required } from "components/form/validation";
import { SendIcon } from "components/Icon";
import { connect } from "react-redux";
import { forgot } from "reducers/auth.actions";
import { bindToActions } from "reducers/util/action";

let ForgotForm = ({ handleSubmit, submitting }) => (
  <Form onSubmit={handleSubmit}>
    <Field
      name="email"
      type="email"
      component={customInput}
      placeholder="Email"
      validate={[required]}
    />
    <SubmitButton submitting={submitting}>
      <SendIcon>Send a password restore link</SendIcon>
    </SubmitButton>
  </Form>
);

ForgotForm = connect(undefined, bindToActions({ onSubmit: forgot }))(reduxForm({ form: 'forgot' })(ForgotForm));

export default ForgotForm;