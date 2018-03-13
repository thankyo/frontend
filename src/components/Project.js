import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, FieldArray, Form, reduxForm } from "redux-form";
import { Link } from "react-router-dom";

import { refreshProjectFeed, updateProject } from "reducers/project.actions";

import Loading from "./Loading";
import { LoadingButton } from "./form/form.utils";
import Tags from "./form/Tags";
import { maxSize, required, smallFieldWithLabel } from "components/form/form.utils";
import { EditButton, RefreshIcon, SaveIcon } from "components/Icon";
import RefreshLink from "components/RefreshLink";

function ViewProject({ avatar, title, description, user, _id, tags, url, isMy, switchToEdit }) {
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
            <p className="subtitle is-6"><a href={`//${url}`}>{url}</a></p>
            <div className="field is-grouped is-grouped-multiline">
              <div className="tags">
                {tags.map((tag, i) => (
                  <Link key={i} to={`/search?query=${tag}`} className="tag is-black">{tag}</Link>))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {isMy && <EditButton onClick={switchToEdit}/>}
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
          <Field
            name="avatar"
            component={smallFieldWithLabel}
            type="url"
            placeholder="Avatar URL"
            help="Url that will be used for your project"
          />
          <Field
            name="title"
            component={smallFieldWithLabel}
            placeholder="Title"
            validate={[required, maxSize(32)]}
            help="Title not more than 32 symbols"
          />
          <Field name="description" component={smallFieldWithLabel} type="textarea" className="textarea"
                 placeholder="Description" validate={[required]}/>
          <Field
            name="rss"
            component={smallFieldWithLabel}
            type="url"
            placeholder="RSS"
            help="that will be used to automatically add new posts"
          />
          <FieldArray name="tags" component={(props) => {
            let { fields } = props;
            let tags = fields.getAll() || [];
            return (
              <div className="field">
                <label className="label is-small">Tags</label>
                <Tags tags={tags} removeTag={(tag) => {
                  fields.remove(tags.indexOf(tag))
                }} addTag={({ tag }) => {
                  fields.push(tag)
                }}/>
                <p className="help">that will be added to every post in this project</p>
              </div>
            )
          }}/>
        </div>
      </div>
      <LoadingButton submitting={submitting} className="is-outlined is-primary">
        <SaveIcon>Save</SaveIcon>
      </LoadingButton>
      <RefreshLink onClick={refreshFeed}>
        <RefreshIcon>Refresh Feed</RefreshIcon>
      </RefreshLink>
    </Form>
  );
}

EditProject = reduxForm({ form: "project", enableReinitialize: true })(EditProject);

class Project extends Component {
  constructor(props) {
    super(props);

    this.state = { edit: false };
  }

  handleModeChange = () => this.setState((state) => ({ edit: !state.edit }));

  render() {
    let { project, id, updateProject, refreshFeed } = this.props;
    let { edit } = this.state;

    if (edit) {
      return <EditProject form={id} initialValues={project} onSubmit={updateProject} refreshFeed={refreshFeed}/>
    } else {
      return <ViewProject {...project} switchToEdit={this.handleModeChange}/>
    }
  }
}


const mapStateToProps = ({ project: { byId } }, { id }) => ({ project: byId[id] });

const mapDispatchToProps = (dispatch, { id }) => {
  return {
    updateProject: (project) => dispatch(updateProject(project)),
    refreshFeed: () => dispatch(refreshProjectFeed(id))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Project)
