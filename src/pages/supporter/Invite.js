import React from "react";
import { invite } from "../../reducers/invite.actions";
import { connect } from 'react-redux';
import { Field, reduxForm } from "redux-form";

function Invite({ handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <div className="support-block has-text-centered notification">
        <form>
          <h1 className="title is-5">Who you are ready to support?</h1>
          <h2 className="subtitle is-6">Put a link or email of the creator and we'll contact him</h2>
          <div className="field has-addons">
            <p className="control is-expanded has-icons-left">
              <Field name="linkOrEmail" component="input" type="text" className="input" placeholder="link or email"/>
              <span className="icon is-small is-left">
                  <i className="fa fa-globe"></i>
                </span>
            </p>
            <p className="control has-icon-left">
              <button className="button button-green" type="submit"><span className="is-narrow"><span
                className="icon">
                  <i className="fa fa-hand-peace-o"></i></span><span>Invite</span></span>
              </button>
            </p>
          </div>
        </form>
      </div>
    </form>
  )
}

Invite = reduxForm({
  form: 'invite'
})(Invite);

const InviteToReducer = ({ invite }) => {
  return (<Invite onSubmit={invite}/>)
};

const mapDispatchToProps = (dispatch) => {
  return {
    invite: (linkOrEmail) => {
      dispatch(invite(linkOrEmail));
    }
  }
};

export default connect(undefined, mapDispatchToProps)(InviteToReducer);
