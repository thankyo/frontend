import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, FieldArray, Form, reduxForm } from "redux-form";
import { Link } from "react-router-dom";

import { refreshProjectFeed, updateProject } from "reducers/project.actions";

import Loading from "./Loading";
import { LoadingButton } from "./form/form.utils";
import { EditButton, RefreshIcon, SaveIcon } from "components/Icon";
import ProjectFormSection from "./form/ProjectFormSection";
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
      <div className="is-pulled-right">
      {isMy && <EditButton onClick={switchToEdit}/>}
      </div>
    </div>
  );
}

function EditProject({ initialValues, submitting, handleSubmit, refreshFeed }) {
  if (!initialValues)
    return (
      <div className="profile has-text-centered">
        <Loading/>
      </div>
    );

  return (
    <Form className="profile" onSubmit={handleSubmit}>
      <div className="columns">
        <div className="column is-one-quarter">
          <div className="project-image">
            <figure className="image is-1by1 is-small">
              <img src={initialValues.project.avatar} className="is-centered"/>
            </figure>
            <br/>
          </div>
        </div>
        <div className="column is-two-third">
          <ProjectFormSection/>
        </div>
      </div>
      <div className="field has-addons is-pulled-right">
        <LoadingButton submitting={submitting} className="is-outlined is-primary">
          <SaveIcon>Save</SaveIcon>
        </LoadingButton>
        <RefreshLink onClick={refreshFeed} className="button is-outlined">
          <RefreshIcon>Refresh Feed</RefreshIcon>
        </RefreshLink>
      </div>
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
      return <EditProject form={id} initialValues={{ project }} onSubmit={(project) => updateProject(project).then(this.handleModeChange)} refreshFeed={refreshFeed}/>
    } else {
      return <ViewProject {...project} switchToEdit={this.handleModeChange}/>
    }
  }
}


const mapStateToProps = ({ project: { byId } }, { id }) => ({ project: byId[id] });

const mapDispatchToProps = (dispatch, { id }) => {
  return {
    updateProject: ({ project }) => dispatch(updateProject(project)),
    refreshFeed: () => dispatch(refreshProjectFeed(id))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Project)
