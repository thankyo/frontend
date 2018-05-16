import React from "react";
import { Field, Form, reduxForm } from "redux-form";
import { customInput, SubmitButton } from "components/form/form.utils";
import { max64, required } from "components/form/validation";
import { LoginIcon } from "components/Icon";
import { login } from "reducers/auth.actions";
import { connect } from 'react-redux';

let LoginForm = ({ handleSubmit, submitting }) => {
  return (
    <Form onSubmit={handleSubmit} className="is-primary">
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
          <LoginIcon>Log in</LoginIcon>
        </SubmitButton>
      </div>
    </Form>
  );
};


const mapDispatchToProps = (dispatch) => ({
  onSubmit: (forgotForm) => dispatch(login(forgotForm))
});

LoginForm = connect(undefined, mapDispatchToProps)(reduxForm({ form: 'login' })(LoginForm));

export default LoginForm;
