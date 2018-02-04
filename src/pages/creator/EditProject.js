import React from 'react';
import { connect } from "react-redux";
import Loading from "components/Loading";
import { Field, Form, reduxForm, FieldArray } from "redux-form";
import { fieldWithLabel, LoadingButton } from "components/form/form.utils";
import { IconWithText } from "components/Icon";
import { updateProject } from "../../reducers/project.actions";
import Tags from "components/form/Tags";

// TODO same Supported in dashboard
function EditProject({ initialValues, submitting, handleSubmit }) {
  if (!initialValues)
    return (
      <div className="has-text-centered">
        <Loading/>
      </div>
    );

  let { avatar } = initialValues;
  return (
    <div>
      <p className="title is-5">Project</p>
      <p className="subtitle is-6"><a href={`//${initialValues.resource.uri}`}>{initialValues.resource.uri}</a></p>
      <Form className="profile" onSubmit={handleSubmit}>
        <div className="columns">
          <div className="column is-one-third">
            <div className="project-image">
              <figure className="image is-1by1 is-small">
                <img src={avatar} width={100} height={100} className="is-centered"/>
              </figure>
              <br/>
            </div>
          </div>
          <div className="column is-two-third">
            <Field name="avatar" component={fieldWithLabel} type="url" className="input" placeholder="Avatar URL"/>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <Field name="title" component={fieldWithLabel} type="input" className="input" placeholder="Title"/>
            <Field name="description" component={fieldWithLabel} type="textarea" className="textarea" placeholder="Description"/>
          </div>
        </div>
        <FieldArray name="tags" component={(props) => {
          let { fields } = props;
          let tags = fields.getAll() || [];
          return (
            <div className="field">
              <label className="label">Tags</label>
              <Tags tags={tags} removeTag={(tag) => { fields.remove(tags.indexOf(tag))}} addTag={({ tag }) => { fields.push(tag) }}/>
            </div>
          )
        }}/>
        <div className="is-pulled-right">
          <LoadingButton submitting={submitting} className="is-outlined is-primary">
            <IconWithText className="fa fa-save" text="Save"/>
          </LoadingButton>
        </div>
      </Form>
    </div>
  );
}

const mapStateToProps = ({ project: { byId }}, { id }) => {
  return {
    initialValues: byId[id],
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (project) => dispatch(updateProject(project))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({ form: "project", enableReinitialize: true })(EditProject));