import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, reduxForm } from "redux-form";
import { Link } from "react-router-dom";

import { refreshProjectFeed, updateProject, getProject } from "reducers/project.actions";

import Loading from "./Loading";
import { EditButton, RefreshIcon, SaveIcon } from "components/Icon";
import ProjectFormSection from "./form/ProjectFormSection";
import RefreshLink from "components/RefreshLink";
import auth from "reducers/util/auth";

function ViewProject({ avatar, title, shortDescription, description, user, _id, tags, url, switchToEdit }) {
  if (!_id) {
    return (
      <div className="has-text-centered">
        <Loading/>
      </div>
    )
  }
  let isMy = auth.isMy(user);

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
            <h1 className="title"><a href={url}>{title}</a></h1>
            <p className="subtitle">{shortDescription}</p>
            <p className='content'>
              {description}
            </p>
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
        <p className="control">
          <button type="submit" className={`${submitting ? "is-loading" : ""} button is-primary`}>
            <SaveIcon>Save</SaveIcon>
          </button>
        </p>
        <RefreshLink onClick={refreshFeed} className="button is-outlined">
          <RefreshIcon>Refresh Feed</RefreshIcon>
        </RefreshLink>
      </div>
    </Form>
  );
}

EditProject = reduxForm({ enableReinitialize: true })(EditProject);

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
  dispatch(getProject(id));
  return {
    updateProject: ({ project }) => dispatch(updateProject(project)),
    refreshFeed: () => dispatch(refreshProjectFeed(id))
  }
};

Project = connect(mapStateToProps, mapDispatchToProps)(Project);

export default Project;
