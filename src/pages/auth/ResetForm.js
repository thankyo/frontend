import React from "react";
import { Field, Form, reduxForm } from "redux-form";
import { LoadingButton, renderField, required, max64 } from "components/form/form.utils";
import { RestoreIcon } from "components/Icon";
import { reset } from "reducers/auth.actions";
import { connect } from "react-redux";

let ResetForm = ({ handleSubmit, submitting }) => {
  return (
    <Form onSubmit={handleSubmit} className="is-primary">
      <Field
        name="password"
        component={renderField}
        type="password"
        placeholder="New Password"
        validate={[required, max64]}
        disabled={submitting}
      />
      <div className="field has-addons">
        <LoadingButton submitting={submitting}>
          <RestoreIcon>Restore</RestoreIcon>
        </LoadingButton>
      </div>
    </Form>
  );
};

const mapDispatchToProps = (dispatch, { token }) => ({
  onSubmit: (forgotForm) => dispatch(reset(forgotForm, token))
});

ResetForm = connect(undefined, mapDispatchToProps)(reduxForm({ form: 'reset' })(ResetForm));

export default ResetForm;