import React from "react";
import ConnectedSocial from "./ConnectedSocial";
import { getUser, updateUser } from "reducers/user.actions";
import { connect } from "react-redux";
import { Field, Form, reduxForm } from "redux-form";
import moment from "moment";

import { customInput, SubmitButton } from "components/form";
import { required } from "components/form/validation";
import { SaveIcon } from "components/Icon";
import { componentFactory } from "components/loadingComponent";
import spinnerFactory from "components/spinnerFactory";

function ProfileEdit({ avatar, handleSubmit, submitting, url, initialValues }) {
  return (
    <div>
      <p className="title is-5 has-text-centered">Profile</p>
      <Form className="profile" onSubmit={handleSubmit}>
        <div className="columns">
          <div className="column is-one-third">
            <div className="profile-image">
              <figure className="image is-1by1 is-small">
                <img src={avatar} className="is-centered"/>
              </figure>
              <br/>
            </div>
          </div>
          <div className="column is-two-third">
            <Field
              name="avatar"
              type="url"
              component={customInput}
              label="Avatar URL"
            />
            <p className="subtitle is-6">We currently do not store profile images, but you can use <a
              href="https://gravatar.com">gravatar</a></p>
          </div>
        </div>
        <div className="columns">
          <div className="column is-half">
            <Field
              name="firstName"
              component={customInput}
              type="string"
              label="First Name"
              validate={[required]}
            />
          </div>
          <div className="column is-half">
            <Field
              name="lastName"
              type="string"
              component={customInput}
              label="Last Name"
              validate={[required]}
            />
          </div>
        </div>
        <div className="columns">
          <div className="column is-half">
            <Field
              name="email"
              type="email"
              component={customInput}
              label="Email"
              validate={[required]}
            />
          </div>
          <div className="column is-half">
            <Field
              name="dateOfBirth"
              type="date"
              component={customInput}
              label="Date Of Birth"
            />
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <Field
              name="bio"
              component={customInput}
              type="textarea"
              className="textarea"
              placeholder="Bio"
              label="Bio"
            />
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <ConnectedSocial profiles={initialValues.profiles} url={url}/>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <time className="is-small is-pulled-right" date={initialValues.created}>
              Registration date: {moment(initialValues.created).format('LL')}
            </time>
          </div>
        </div>
        <div className="is-pulled-right">
          <SubmitButton submitting={submitting} className="is-outlined is-primary">
            <SaveIcon>Save</SaveIcon>
          </SubmitButton>
        </div>
      </Form>
    </div>
  )
}

const mapStateToEditProps = ({ user: { my: { data } = {} }, auth: { url }, form: { profile: { values: { avatar } = {} } = {} } }) => {
  return {
    avatar,
    url,
    initialValues: data
  };
};

const mapDispatchToEditProps = (dispatch) => {
  return {
    onSubmit: (user) => dispatch(updateUser(user))
  };
};

ProfileEdit = connect(mapStateToEditProps, mapDispatchToEditProps)(reduxForm({ form: "profile" })(ProfileEdit));

const ProfileSection = () => (<ProfileEdit/>);


const mapStateToSectionProps = ({ user: { my = {} } }) => my;

const mapDispatchToSectionProps = (dispatch) => {
  dispatch(getUser("my"));
  return {}
};

export default connect(mapStateToSectionProps, mapDispatchToSectionProps)(componentFactory(ProfileSection, spinnerFactory(300)));