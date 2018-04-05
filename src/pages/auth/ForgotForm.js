import React from "react";
import { Field, Form, reduxForm } from "redux-form";
import { LoadingButton, renderField, required } from "components/form/form.utils";
import { SendIcon } from "components/Icon";
import { connect } from "react-redux";
import { forgot } from "reducers/auth.actions";

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

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (forgotForm) => dispatch(forgot(forgotForm))
});

ForgotForm = connect(undefined, mapDispatchToProps)(reduxForm({ form: 'forgot' })(ForgotForm));

export default ForgotForm;