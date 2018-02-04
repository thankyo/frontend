import React from "react";
import { Field, Form, reduxForm } from "redux-form";
import { connect } from 'react-redux';
import { IconWithText } from "../../components/Icon";
import { LoadingButton, renderField, required } from "../../components/form/form.utils";
import { verify } from "../../reducers/thank/resource.actions";

let VerificationPage = ({ submitting, verify }) => {
  return (
    <Form onSubmit={verify} className="is-primary has-text-centered">
      <h1 className="title is-2">Which url do you want to verify </h1>
      <br/>
      <h1 className="title is-5">Before starting you need to verify resource ownership</h1>
      <Field name="uri" component={renderField} type="uri" className="input" placeholder="Link" validate={[required]} disabled={submitting}/>

      <div className="field">
        <LoadingButton submitting={submitting}>
          <IconWithText className="fa fa-check" text="Verify"/>
        </LoadingButton>
      </div>
    </Form>
  )
};

const mapDispatchToProps = (dispatch, { id }) => {
  return {
    verify: (resource) => {
      dispatch(verify(id, Object.assign(resource, { type: "http" })))
    }
  }
};

export default connect(undefined, mapDispatchToProps)(reduxForm({
  form: 'verifyResource'
})(VerificationPage))