import React from "react";
import { connect } from "react-redux";
import { Field, Form, reduxForm, FieldArray } from "redux-form";
import { Link } from "react-router-dom";

import { refreshProjectFeed, updateProject } from "reducers/project.actions";

import Loading from "./Loading";
import { fieldWithLabel, LoadingButton } from "./form/form.utils";
import { IconWithText, WebStackIcon } from "./Icon";
import Tags from "./form/Tags";
import Resource from "./Resource";
import RefreshButton from "components/RefreshButton";
import RefreshLink from "components/RefreshLink";
import { Icon } from "components/Icon";
import { flatField } from "components/form/form.utils";

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
                <img src={avatar} className="is-centered"/>
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

function EditProject({ initialValues, submitting, handleSubmit, refreshFeed }) {
  if (!initialValues)
    return (
      <div className="has-text-centered">
        <Loading/>
      </div>
    );

  return (
    <div>
      <p className="title is-5">Project</p>
      <p className="subtitle is-6"><a href={`//${initialValues.resource.uri}`}>{initialValues.resource.uri}</a></p>
      <Form className="profile" onSubmit={handleSubmit}>
        <div className="columns">
          <div className="column is-one-third">
            <div className="project-image">
              <figure className="image is-1by1 is-small">
                <img src={initialValues.avatar} className="is-centered"/>
              </figure>
              <br/>
            </div>
          </div>
          <div className="column is-two-third">
            <Field name="avatar" component={fieldWithLabel} type="url" placeholder="Avatar URL"/>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <Field name="title" component={fieldWithLabel} placeholder="Title"/>
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
        <hr/>
        <p className="title is-6">RSS</p>
        <div className="columns">
          <div className="column is-9">
            <Field name="rss" component={flatField} type="url" placeholder="RSS"/>
          </div>
          <div className="column is-3">
            <RefreshLink onClick={refreshFeed}>
              <IconWithText className="fa fa-refresh" text="Refresh"/>
            </RefreshLink>
          </div>
        </div>
        <div className="is-pulled-right">
          <LoadingButton submitting={submitting} className="is-outlined is-primary">
            <IconWithText className="fa fa-save" text="Save"/>
          </LoadingButton>
        </div>
      </Form>
    </div>
  );
}
EditProject = reduxForm({ form: "project", enableReinitialize: true })(EditProject);

function ProjectLine({ project: { webStack, resource, _id, enabled }, onSubmit }) {
  return (
    <div className="columns">
      <div className="column is-7">
        <WebStackIcon webStack={webStack}/>
        <Resource resource={resource}/>
      </div>
      <div className="column is-2">
        {enabled ? "Enabled" : "Disabled"}
      </div>
      <div className="column is-3">

        <RefreshButton onClick={onSubmit} className={enabled ? "is-primary" : "is-default"}>
          {enabled ? <Icon className="fa fa-toggle-on"/> : <Icon className='fa fa-toggle-off'/>}
        </RefreshButton>
      </div>
    </div>
  )
}

function Project({ edit, line, project, id, updateProject, refreshFeed}) {
  if (line) {
    return <ProjectLine project={project} onSubmit={() => updateProject(Object.assign({}, project, { enabled: !project.enabled}))}/>
  } else if (edit) {
    return <EditProject form={id} initialValues={project} onSubmit={updateProject} refreshFeed={refreshFeed}/>
  } else {
    return <ViewProject initialValues={project} {...project}/>
  }
}


const mapStateToProps = ({ project: { byId }}, { id }) => ({ project: byId[id] });

const mapDispatchToProps = (dispatch, { id }) => {
  return {
    updateProject: (project) => dispatch(updateProject(project)),
    refreshFeed: () => dispatch(refreshProjectFeed(id))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Project)
