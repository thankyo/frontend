import React from "react";
import { connect } from "react-redux";
import { Field, Form, reduxForm, FieldArray } from "redux-form";
import { Link } from "react-router-dom";

import { getProject } from "reducers/project.actions";
import { updateProject } from "reducers/project.actions";

import Loading from "components/Loading";
import { fieldWithLabel, LoadingButton } from "components/form/form.utils";
import { IconWithText } from "components/Icon";
import Tags from "components/form/Tags";

function ViewProject({ avatar, title, description, user, _id, tags, resource }) {
  if (!_id) {
    return (
      <div className="has-text-centered">
        <Loading/>
      </div>
    )
  }

  return (
    <div>
      <div className="profile">
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
            <p className="title">{title}</p>
            <p className="subtitle">{description}</p>
            <p className="subtitle is-6"><a href={`//${resource.uri}`}>{resource.uri}</a></p>
            <div className="field is-grouped is-grouped-multiline">
              <div className="tags">
                {tags.map((tag, i) => (<Link key={i} to={`/search?query=${tag}`} className="tag is-black">{tag}</Link>))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

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
EditProject = reduxForm({ enableReinitialize: true })(EditProject);

function Project() {

}

export default connect(mapStateToProps, mapDispatchToProps)(ViewProject)

const mapStateToProps = ({ project: { byId }}, { id }) => (byId[id] || {});

const mapDispatchToProps = (dispatch, { id }) => {
  return {
    loadProject: () => dispatch(getProject(id)),
    onSubmit: (project) => dispatch(updateProject(project))
  }
};

