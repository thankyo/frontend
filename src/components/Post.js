import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { lovePost, savePost, deletePost, refreshPost } from "reducers/post/post.actions";
import { goToAuth } from "reducers/navigation.actions";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import { Field, FieldArray, Form, reduxForm } from "redux-form";
import { DeleteIcon, LoveItButton, SaveIcon, RefreshIcon, EditIcon } from "components/Icon";
import moment from "moment/moment";
import { smallFieldWithLabel } from "components/form/form.utils";
import Tags from "components/form/Tags";
import { isMyObj } from "reducers/util/markMy";
import RefreshLink from "components/RefreshLink";

function EditPostOnTimeline({ submitting, initialValues, project, handleSubmit, onDelete }) {
  return (
    <li className="timeline-item is-primary">
      <div className="timeline-marker is-medium is-primary">
      </div>
      <div className="timeline-marker is-primary is-image is-32x32">
        <img src={project.avatar}/>
      </div>
      <div className="timeline-content">
        <div className="heading">
          <h1 className="is-size-6"><a>{initialValues.url}</a></h1>
          <h2 className="is-size-7 small">{moment(initialValues.pubDate).format("MMMM Do")}</h2>
        </div>
        <Form onSubmit={handleSubmit}>
          <Field name="title" component={smallFieldWithLabel} placeholder="Title"/>
          <Field name="description" component={smallFieldWithLabel} className="textarea" type="textarea" placeholder="Description"/>
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
              </div>
            )
          }}/>
          <Field name="image.url" component={smallFieldWithLabel} type="image" placeholder="Image"/>
          <div className="field has-addons">
            <div className="control">
              <button type="submit" className={`${submitting ? "is-loading" : ""} button is-primary is-small`}>
                <SaveIcon>Save</SaveIcon>
              </button>
            </div>
            <div className="control">
              <RefreshLink className="button is-small is-danger" onClick={onDelete}>
                <DeleteIcon>Delete</DeleteIcon>
              </RefreshLink>
            </div>
          </div>
        </Form>
      </div>
    </li>
  )
}

EditPostOnTimeline = reduxForm({ enableReinitialize: true })(EditPostOnTimeline);


function PostControls({ post, switchToEdit, isAuthenticated, lovePost, goToAuth, refreshPost }) {
  let isMy = isMyObj(post.project);
  if (isMy) {
    return <div className="field has-addons">
      <div className="control">
        <a className="button is-primary is-outlined is-small" onClick={switchToEdit}>
          <EditIcon>Edit</EditIcon>
        </a>
      </div>
      <RefreshLink className="button is-primary is-outlined is-small" onClick={() => refreshPost(post)}>
        <RefreshIcon>Refresh</RefreshIcon>
      </RefreshLink>
    </div>
  } else {
    return <LoveItButton isLoved={post.isLoved} thank={post.thank} onLove={() => isAuthenticated ? lovePost(post.url) : goToAuth()}/>
  }
}

function PostOnTimeline({ post, isAuthenticated, goToAuth, lovePost, switchToEdit, refreshPost }) {
  let { ogObj: { title, description, image: { url = "" } = {}, tags = [], pubDate }, project } = post;
  return (
    <li className="timeline-item is-primary">
      <div className="timeline-marker is-medium is-primary">
      </div>
      <div className="timeline-marker is-primary is-image is-32x32">
        <Link to={`/creator/${project.user}/project/${project._id}`}>
          <img src={project.avatar}/>
        </Link>
      </div>
      <div className="timeline-content">
        <div className="heading">
          <h1 className="is-size-6"><a href={post.url}><strong>{title}</strong></a></h1>
          <h2 className="is-size-7 small">{moment(pubDate).format("MMMM Do")}</h2>
        </div>
        <div className="content">
          {description}
          {tags.map((tag, i) => <Link key={i} to={`/search?query=${tag}`}> #{tag}</Link>)}
        </div>
        <figure className="image">
          <img src={url}/>
        </figure>
        <br/>
        <PostControls post={post} switchToEdit={switchToEdit} lovePost={lovePost} goToAuth={goToAuth} refreshPost={refreshPost} isAuthenticated={isAuthenticated}/>
      </div>
    </li>
  );
}

class Post extends Component {
  constructor(props) {
    super(props);

    this.state = { edit: false };
  }

  handleModeChange = () => this.setState((state) => ({ edit: !state.edit }));

  render() {
    let { post, savePost, deletePost } = this.props;
    let { edit } = this.state;

    if (!post) {
      return <div>Loading</div>
    }

    if (edit) {
      return <EditPostOnTimeline form={post._id}
                                 initialValues={post.ogObj}
                                 project={post.project}
                                 onSubmit={(ogObj) => savePost(ogObj).then(this.handleModeChange)}
                                 onDelete={() => deletePost(post).then(this.handleModeChange)}/>
    } else {
      return <PostOnTimeline {... this.props} switchToEdit={this.handleModeChange}/>
    }
  }
}


const mapStateToProps = ({ post: { byId }, auth: { isAuthenticated } }, { id }) => ({ post: byId[id], isAuthenticated });

const mapDispatchToProps = (dispatch) => bindActionCreators({ lovePost, savePost, deletePost, goToAuth, refreshPost }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Post)