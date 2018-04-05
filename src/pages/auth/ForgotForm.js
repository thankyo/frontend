import React from "react";
import { Field, Form, reduxForm } from "redux-form";
import { LoadingButton, required } from "components/form/form.utils";
import { SendIcon } from "components/Icon";

let ForgotForm = ({ handleSubmit, submitting }) => {
  return (
    <Form onSubmit={handleSubmit} className="is-primary">
      <Field name="email" component={renderField} type="email" placeholder="Email"
             validate={[required]} disabled={submitting}/>

      <div className="field">
        <LoadingButton submitting={submitting}>
          <SendIcon>Send a password restore link</SendIcon>
        </LoadingButton>
      </div>
    </Form>
  );
};

ForgotForm = reduxForm({ form: 'forgot' })(ForgotForm);

export default ForgotForm;