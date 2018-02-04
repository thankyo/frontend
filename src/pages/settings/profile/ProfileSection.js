import React, { Component } from "react";
import { fetchUser, saveUser } from "../../../reducers/user.actions";
import { connect } from "react-redux";
import { Field, Form, reduxForm } from "redux-form";
import moment from "moment";


import Loading from "../../../components/Loading";
import { fieldWithLabel, LoadingButton, required } from "../../../components/form/form.utils";
import { IconWithText } from "../../../components/Icon";

class ProfileSection extends Component {

  componentWillMount() {
    this.props.fetchMyProfile();
  }

  render() {
    let { initialValues, avatar, handleSubmit, submitting } = this.props;
    if (initialValues === undefined) {
      return (
        <div className="has-text-centered">
          <p className="title is-5">Profile</p>
          <Loading/>
        </div>
      )
    }

    return (
      <div>
        <p className="title is-5 has-text-centered">Profile</p>
        <Form className="profile" onSubmit={handleSubmit}>
          <div className="columns">
            <div className="column is-one-third">
              <div className="profile-image">
                <figure className="image is-1by1 is-small">
                  <img src={avatar} width={100} height={100} className="is-centered"/>
                </figure>
                <br/>
              </div>
            </div>
            <div className="column is-two-third">
              <Field name="avatar" component={fieldWithLabel} type="url" className="input" placeholder="Avatar URL"/>
              <p className="subtitle is-6">We currently do not store profile images, but you can use <a href="https://gravatar.com">gravatar</a></p>
            </div>
          </div>
          <div className="columns">
            <div className="column is-half">

              <Field name="firstName"
                     component={fieldWithLabel}
                     type="string"
                     className="input"
                     placeholder="First name"
                     validate={[required]}/>
            </div>
            <div className="column is-half">
              <Field name="lastName" component={fieldWithLabel} type="string" className="input"
                     placeholder="Last name" validate={[required]}/>
            </div>
          </div>
          <div className="columns">
            <div className="column is-half">
              <Field name="email" component={fieldWithLabel} type="email" className="input" placeholder="Email"
                     validate={[required]}/>
            </div>
            <div className="column is-half">
              <Field name="dateOfBirth" component={fieldWithLabel} type="date" className="input"
                     placeholder="Date Of Birth" disabled/>
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <Field name="bio" component={fieldWithLabel} type="textarea" className="textarea" placeholder="Bio"/>
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <time className="is-small is-pulled-right" date={initialValues.created}>Registration date: {moment(initialValues.created).format('LL')}</time>
            </div>
          </div>
          <div className="is-pulled-right">
            <LoadingButton submitting={submitting} className="is-outlined is-primary">
              <IconWithText className="fa fa-save" text="Save"/>
            </LoadingButton>
          </div>
        </Form>
      </div>
    )
  }
}

const mapStateToProps = ({ user: { my }, form: { profile: { values: { avatar } = {} } = {} } }) => {
  return {
    avatar,
    initialValues: my
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMyProfile: () => dispatch(fetchUser("my")),
    onSubmit: (user) => dispatch(saveUser(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({ form: "profile" })(ProfileSection))