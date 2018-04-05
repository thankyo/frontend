import React from "react";
import { Field, Form, reduxForm } from "redux-form";
import { LoadingButton, max64, renderField, required } from "components/form/form.utils";
import { LoginIcon } from "components/Icon";

let LoginForm = ({ handleSubmit, submitting }) => {
  return (
    <Form onSubmit={handleSubmit} className="is-primary">
      <Field name="email" component={renderField} type="email" placeholder="Email"
             validate={[required]} disabled={submitting}/>
      <Field name="password" component={renderField} type="password" placeholder="Password"
             validate={[required, max64]} disabled={submitting}/>

      <div className="field has-addons">
        <LoadingButton submitting={submitting}>
          <LoginIcon>Log in</LoginIcon>
        </LoadingButton>
      </div>
    </Form>
  );
};

LoginForm = reduxForm({ form: 'login' })(LoginForm);

export default LoginForm;
