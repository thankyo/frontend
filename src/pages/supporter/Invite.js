import React from "react";
import { invite } from "../../reducers/invite.actions";
import { connect } from 'react-redux';
import { Field, Form, reduxForm } from "redux-form";
import { LoadingButton, renderField, required } from "../../common/form.utils";

function Invite({ handleSubmit, submitting }) {
  return (
    <div className="support-block has-text-centered notification">
      <h1 className="title is-5">Who you are ready to support?</h1>
      <h2 className="subtitle is-6">Put a link or email of the creator and we'll contact him</h2>
      <Form onSubmit={handleSubmit}>
        <div className="field has-addons">
          <p className="control is-expanded has-icons-left">
            <Field name="linkOrEmail" component={renderField} validate={[required]} type="text"
                   className="input is-inverted is-outlined" placeholder="Link or email"/>
            <span className="icon is-small is-left"><i className="fa fa-globe"/></span>
          </p>
          <LoadingButton submitting={submitting} className={"button-green"}>
            <span className="is-narrow">
              <span className="icon"><i className="fa fa-hand-peace-o"/></span>
              <span>Invite</span>
            </span>
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
    console.log(res);
    return res;
  }}/>)
};

const mapDispatchToProps = (dispatch) => {
  return {
    invite: (linkOrEmail) => dispatch(invite(linkOrEmail))
  }
};

export default connect(undefined, mapDispatchToProps)(InviteToReducer);
