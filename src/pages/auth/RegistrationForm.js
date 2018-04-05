import React from "react";
import { Field, Form, reduxForm } from "redux-form";
import { LoadingButton, max64, renderField, required } from "components/form/form.utils";
import { RegisterIcon } from "components/Icon";

let RegistrationForm = ({ handleSubmit, submitting }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Field name="firstName" component={renderField} type="string" placeholder="First name"
             validate={[required]}/>
      <Field name="lastName" component={renderField} type="string" placeholder="Last name"
             validate={[required]}/>
      <Field name="email" component={renderField} type="email" placeholder="Email"
             validate={[required]}/>
      <Field name="password" component={renderField} type="password" placeholder="Password"
             validate={[required, max64]}/>
      <div className="field has-addons">
        <LoadingButton submitting={submitting}>
          <RegisterIcon>Register</RegisterIcon>
        </LoadingButton>
      </div>
    </Form>
  );
};

RegistrationForm = reduxForm({ form: 'register' })(RegistrationForm);

export default RegistrationForm;