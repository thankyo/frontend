import React from "react";
import { Field, Form, reduxForm } from "redux-form";
import { connect } from 'react-redux';

import { addProject } from "reducers/project.actions";
import { LoadingButton, renderField, required } from "components/form/form.utils";
import { IconWithText } from "components/Icon";

function AddProject ({ handleSubmit, submitting }){
  return (
    <Form onSubmit={handleSubmit} className="is-primary">
      <Field name="url" component={renderField} type="url" className="input" placeholder="Url" validate={[required]} disabled={submitting}/>

      <div className="field has-addons">
        <LoadingButton submitting={submitting} className="is-default">
          <IconWithText className="fa fa-refresh" text="Check"/>
        </LoadingButton>
      </div>
    </Form>
  );
}

const mapStateToProps = ({ project: { add }}) => ({ technologies: add })
const mapDispatchToProps = (dispatch) => ({
  onSubmit: (project) => dispatch(addProject(project))
});

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({ form: "add" })(AddProject));