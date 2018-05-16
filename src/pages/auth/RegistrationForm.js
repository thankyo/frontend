import React from "react";
import { Field, Form, reduxForm } from "redux-form";
import { customInput, SubmitButton } from "components/form/form.utils";
import { max64, required } from "components/form/validation";
import { RegisterIcon } from "components/Icon";
import { connect } from "react-redux";
import { signUp } from "reducers/auth.actions";

let RegistrationForm = ({ handleSubmit, submitting }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Field
        name="firstName"
        type="string"
        component={customInput}
        placeholder="First Name"
        validate={[required]}
      />
      <Field
        name="lastName"
        type="string"
        component={customInput}
        placeholder="Last Name"
        validate={[required]}
      />
      <Field
        name="email"
        type="email"
        component={customInput}
        placeholder="Email"
        validate={[required]}
      />
      <Field
        name="password"
        type="password"
        component={customInput}
        placeholder="Password"
        validate={[required, max64]}
      />
      <div className="field">
        <SubmitButton submitting={submitting}>
          <RegisterIcon>Register</RegisterIcon>
        </SubmitButton>
      </div>
    </Form>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (forgotForm) => dispatch(signUp(forgotForm))
});


RegistrationForm = connect(undefined, mapDispatchToProps)(reduxForm({ form: 'register' })(RegistrationForm));

export default RegistrationForm;