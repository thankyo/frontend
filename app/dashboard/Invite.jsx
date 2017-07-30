import React from "react";
import { invite } from "../reducers/invite.actions";
import Icon from "../components/Icon";
import { connect } from 'react-redux';
import { Field, reduxForm } from "redux-form";

let Invite = ({ handleSubmit }) => {
  return (
    <div className="has-text-centered notification is-info">
      <form onSubmit={ handleSubmit }>
        <h1 className="title">Who you are ready to support?</h1>
        <h2 className="subtitle">Put a link or email of the creator and we'll contact him</h2>
        <div className="field has-addons">
          <p className="control is-expanded has-icons-left">
            <Field name="linkOrEmail" component="input" type="text" className="input" placeholder="link or email"/>
            <span className="icon is-small is-left">
              <i className="fa fa-globe"></i>
            </span>
          </p>
          <p className="control has-icon-left">
            <button className="button is-info is-inverted is-outlined is-hovered" type="submit">
              <Icon fa="hand-spock-o" text="Invite"/>
            </button>
          </p>
        </div>
      </form>
    </div>
  )
};

Invite = reduxForm({
  form: 'invite'
})(Invite);

const InviteToReducer = ({ invite }) => {
  return (<Invite onSubmit={ invite }/>)
};

const mapDispatchToProps = (dispatch) => {
  return {
    invite: (linkOrEmail) => {
      dispatch(invite(linkOrEmail));
    }
  }
};

export default connect(undefined, mapDispatchToProps)(InviteToReducer);
