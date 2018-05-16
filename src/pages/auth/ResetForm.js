import React from "react";
import { Field, Form, reduxForm } from "redux-form";
import { customInput, SubmitButton } from "components/form";
import { required, max64 } from "components/form/validation";
import { RestoreIcon } from "components/Icon";
import { reset } from "reducers/auth.actions";
import { connect } from "react-redux";

let ResetForm = ({ handleSubmit, submitting }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Field
        name="password"
        type="password"
        component={customInput}
        placeholder="New Password"
        validate={[required, max64]}
      />
      <SubmitButton submitting={submitting}>
        <RestoreIcon>Restore</RestoreIcon>
      </SubmitButton>
    </Form>
  );
};

const mapDispatchToProps = (dispatch, { token }) => ({
  onSubmit: (forgotForm) => dispatch(reset(forgotForm, token))
});

ResetForm = connect(undefined, mapDispatchToProps)(reduxForm({ form: 'reset' })(ResetForm));

export default ResetForm;