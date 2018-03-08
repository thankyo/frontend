import React, { Fragment } from "react";
import { connect } from "react-redux";
import { enrichProject } from "reducers/project.actions";
import Resource from "components/Resource";
import { InstallIcon, PendingIcon } from "components/Icon";
import { expandableComponent } from "components/timeline/util";
import InstallationPage from "./installation";
import RefreshLink from "components/RefreshLink";
import Project from "components/Project";
import { Field, FieldArray, Form, reduxForm } from "redux-form";
import { smallFieldWithLabel } from "components/form/form.utils";
import Tags from "components/form/Tags";

function EditProject({ initialValues, submitting, handleSubmit }) {
  return (
    <Fragment>
      <Form className="profile" onSubmit={handleSubmit}>
        <div className="columns">
          <div className="column is-one-quarter">
            <div className="project-image">
              <figure className="image is-1by1 is-small">
                <img src={initialValues.avatar} className="is-centered"/>
              </figure>
              <br/>
            </div>
          </div>
          <div className="column is-two-third">
            <Field name="avatar" component={smallFieldWithLabel} type="url" placeholder="Avatar URL"/>
            <Field name="title" component={smallFieldWithLabel} placeholder="Title"/>
            <Field name="description" component={smallFieldWithLabel} type="textarea" className="textarea" placeholder="Description"/>
            <Field name="rss" component={smallFieldWithLabel} type="url" placeholder="RSS"/>
            <FieldArray name="tags" component={(props) => {
              let { fields } = props;
              let tags = fields.getAll() || [];
              return (
                <div className="field">
                  <label className="label is-small">Tags</label>
                  <Tags tags={tags} removeTag={(tag) => {fields.remove(tags.indexOf(tag))}} addTag={({ tag }) => {fields.push(tag)}}/>
                </div>
              )
            }}/>
          </div>
        </div>
        <div className="columns">
          <div className="column">
          </div>
        </div>
      </Form>
    </Fragment>
  );
}

EditProject = reduxForm({ })(EditProject)

const PendingProjectStep2 = (project) => (
  <Fragment>
    <li className="timeline-item is-primary is-large">
      <div className="timeline-marker is-medium is-primary"/>
      <div className="timeline-content">
        <p className="heading">
          <Resource url={project.url}/>
        </p>
        <EditProject initialValues={project} form={project.url}/>
        <RefreshLink className="button is-small is-primary is-outlined" onClick={() => Promise.resolve(false)}>
          <InstallIcon>Finish</InstallIcon>
        </RefreshLink>
      </div>
    </li>
  </Fragment>
);

const PendingProjectStep1 = ({ webStack, url, _id, enabled, handleExpand }) => (
    <li className="timeline-item is-primary is-large">
      <div className="timeline-marker is-medium is-primary"/>
      <div className="timeline-content">
        <p className="heading">
          <Resource url={url}/>
        </p>
        <InstallationPage url={url} webStack={webStack}/>
        <br/>
        <div className="button is-small is-primary is-outlined" onClick={handleExpand}>
          <InstallIcon>Next</InstallIcon>
        </div>
      </div>
    </li>
);

const PendingProjectInstallation = expandableComponent(PendingProjectStep2, PendingProjectStep1);


let PendingProjectCollapsed = ({ webStack, url, _id, enabled, enrich, handleExpand }) => (
  <li className="timeline-item is-primary">
    <div className="timeline-marker is-medium is-primary"/>
    <div className="timeline-content">
      <p className="heading">
        <Resource url={url}/>
      </p>
      <RefreshLink className="button is-small is-primary" onClick={() => enrich().then(handleExpand)}>
        <InstallIcon>Install</InstallIcon>
      </RefreshLink>
    </div>
  </li>
);

PendingProjectCollapsed = connect(undefined, (dispatch, project) => ({ enrich: () => dispatch(enrichProject(project))}) )(PendingProjectCollapsed);


const PendingProject = expandableComponent(PendingProjectInstallation, PendingProjectCollapsed);

const NoPending = () => (
  <li className="timeline-item is-primary">
    <div className="timeline-marker is-medium is-primary"/>
    <div className="timeline-content">
      <p className="heading">All urls were successfully installed</p>
    </div>
  </li>
);

const PendingProjects = ({ projects }) => {
  return <Fragment>
    <li className="timeline-header is-success">
        <span className="tag is-primary">
          <PendingIcon>Pending</PendingIcon>
        </span>
    </li>
    {projects.map((project, i) => (<PendingProject key={i} {...project}/>))}
    {projects.length === 0 && <NoPending/>}
  </Fragment>;
};

export default PendingProjects;