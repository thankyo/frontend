import React from "react";
import { Field, Form, reduxForm } from "redux-form";
import { LoadingButton, renderField, required, max64 } from "components/form/form.utils";
import { RestoreIcon } from "components/Icon";

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

ResetForm = reduxForm({ form: 'reset' })(ResetForm);

export default ResetForm;