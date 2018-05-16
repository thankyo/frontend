import React from "react";
import { connect } from "react-redux";
import { InstallIcon } from "components/Icon";
import { projectDibs } from "reducers/project.actions";
import { Field, Form, reduxForm } from "redux-form";
import { customInput, SubmitButton } from "components/form";
import { required, urlFormat } from "components/form/validation";

import { reset } from 'redux-form';

let DibsSubmitButton = ({submitting}) => (
  <SubmitButton className="button is-small is-primary" submitting={submitting}>
    <InstallIcon>Add</InstallIcon>
  </SubmitButton>
);

let DibsForm = ({ handleSubmit, submitting }) => (
  <li className="timeline-item is-primary">
    <div className="timeline-marker is-primary">
    </div>
    <div className="timeline-content">
      <p className="heading">
        We'll try to verify with WHOIS record
      </p>
      <div className="content">
        <Form onSubmit={handleSubmit}>
          <Field
            name="url"
            type="text"
            component={customInput}
            help="And verify manually if WHOIS did not workout"
            validate={[required, urlFormat]}
            addon={<DibsSubmitButton submitting={submitting}/>}
            isSmall
          />
        </Form>
      </div>
    </div>
  </li>
);

DibsForm = reduxForm({ form: "project-dibs" })(DibsForm);

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (form) => dispatch(projectDibs(form))
});

DibsForm = connect(undefined, mapDispatchToProps)(DibsForm);

export default DibsForm;