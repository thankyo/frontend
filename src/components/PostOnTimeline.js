import React, { Component } from "react";
import { Link } from "react-router-dom";
import { lovePost, savePost } from "reducers/post/post.actions";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import { Field, FieldArray, Form, reduxForm } from "redux-form";
import { EditButton, LoveItButton, SaveIcon } from "components/Icon";
import moment from "moment/moment";
import { smallFieldWithLabel } from "components/form/form.utils";
import Tags from "components/form/Tags";
import { isMyObj } from "reducers/util/markMy";

function EditPostOnTimeline({ submitting, initialValues, project, handleSubmit }) {
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
          <p className="control">
            <button type="submit" className={`${submitting ? "is-loading" : ""} button is-primary is-small`}>
              <SaveIcon>Save</SaveIcon>
            </button>
          </p>
        </Form>
      </div>
    </li>
  )
}

EditPostOnTimeline = reduxForm({ enableReinitialize: true })(EditPostOnTimeline);

function PostOnTimeline({ post, lovePost, switchToEdit }) {
  let isMy = isMyObj(post.project);
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
        <div className="media-content">
          {isMy ? <EditButton onClick={switchToEdit}/> : <LoveItButton isLoved={post.isLoved} onLove={() => lovePost(post.url)}/>}
        </div>
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
    let { post, lovePost, savePost } = this.props;
    let { edit } = this.state;

    if (!post) {
      return <div>Loading</div>
    }

    if (edit) {
      return <EditPostOnTimeline form={post._id} initialValues={post.ogObj} project={post.project} onSubmit={(ogObj) => savePost(ogObj).then(this.handleModeChange)}/>
    } else {
      return <PostOnTimeline post={post} lovePost={lovePost} switchToEdit={this.handleModeChange}/>
    }
  }
}


const mapStateToProps = ({ post: { byId } }, { id }) => ({ post: byId[id] });

const mapDispatchToProps = (dispatch) => bindActionCreators({ lovePost, savePost }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Post)