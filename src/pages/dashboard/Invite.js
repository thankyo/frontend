import React from "react";
import { invite } from "reducers/invite.actions";
import { connect } from 'react-redux';
import { Field, Form, reduxForm } from "redux-form";
import { flatField, LoadingButton, required } from "components/form/form.utils";
import { InviteIcon } from "components/Icon";

function Invite({ handleSubmit, submitting }) {
  return (
    <div className="support-block has-text-centered notification">
      <h1 className="title is-5">Who you are ready to support?</h1>
      <h2 className="subtitle is-6">Put a link or email of the creator and we'll contact him</h2>
      <Form onSubmit={handleSubmit}>
        <div className="field has-addons">
          <div className="control is-expanded has-icons-left">
            <Field name="linkOrEmail" component={flatField} validate={[required]} placeholder="Link or email"/>
          </div>
          <LoadingButton submitting={submitting}>
            <InviteIcon>Invite</InviteIcon>
          </LoadingButton>
        </div>
      </Form>
    </div>
  )
}

Invite = reduxForm({
  form: 'invite'
})(Invite);

const InviteToReducer = ({ invite }) => {
  return (<Invite onSubmit={(linkOrEmail) => {
    let res = invite(linkOrEmail);
    return res;
  }}/>)
};

const mapDispatchToProps = (dispatch) => {
  return {
    invite: (linkOrEmail) => dispatch(invite(linkOrEmail))
  }
};

export default connect(undefined, mapDispatchToProps)(InviteToReducer);
