import React from "react";
import { Field, FieldArray, Form, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { lovePost, enableEdit, savePost } from "reducers/post.actions";
import { connect } from "react-redux";

import { IconWithText } from "components/Icon";
import { fieldWithLabel, LoadingButton } from "components/form/form.utils";
import Tags from "components/form/Tags";

function EditPost({ submitting, initialValues, handleSubmit }) {
  return (
    <div className="columns">
      <div className="column">

        <Form onSubmit={handleSubmit}>
          <Field name="url" component={fieldWithLabel} className="input" placeholder="Url" disabled/>
          <hr/>
          <Field name="image.url" component={fieldWithLabel} type="image" className="input" placeholder="Image"/>
          <hr/>
          <Field name="title" component={fieldWithLabel} className="input" placeholder="Title"/>
          <Field name="description" component={fieldWithLabel} className="textarea" type="textarea"
                 placeholder="Description"/>
          <FieldArray name="tags" component={(props) => {
            let { fields } = props;
            let tags = fields.getAll() || [];
            return (
              <div className="field">
                <label className="label">Tags</label>
                <Tags tags={tags} removeTag={(tag) => {
                  fields.remove(tags.indexOf(tag))
                }} addTag={({ tag }) => {
                  fields.push(tag)
                }}/>
              </div>
            )
          }}/>
          <LoadingButton submitting={submitting} className="is-primary is-pulled-right">
            <IconWithText className="fa fa-save" text="Save"/>
          </LoadingButton>
        </Form>
      </div>
    </div>
  )
}

EditPost = reduxForm()(EditPost);

function ViewPost({ post, onEdit, onLove }) {
  let { resource: { uri }, ogObj: { title, description, image: { url = "" } = {}, tags = [] }, project } = post;
  return (
    <div className="columns">
      <div className="column">
        <figure className="image">
          <img src={url}/>
        </figure>
        <br/>
        <article className="media media-new-style">
          <figure className="media-left">
            <Link to={`/creator/${project.user}/project/${project._id}`}>
              <p className="image is-64x64">
                <img src={project.avatar}/>
              </p>
            </Link>
          </figure>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{title}</strong>
                <br/>
                {description}
                {tags.map((tag, i) => <Link key={i} to={`/search?query=${tag}`}> #{tag}</Link>)}
              </p>
            </div>
            <nav className="level is-mobile">
              <div className="level-left">
                <div className="level-item">
                  {post.isLoved && <span className="icon is-small"><i className="fa fa-heart"/></span>}
                  {!post.isLoved && <a className="icon is-small" onClick={() => onLove(uri)}><i className="fa fa-heart"/></a>}
                </div>
                {post.isMy && (
                  <a className="level-item" onClick={onEdit}>
                    <span className="icon is-small"><i className="fa fa-edit"/></span>
                  </a>
                  )
                }
              </div>
            </nav>
          </div>
        </article>
      </div>
    </div>
  );
}

function Post(props) {
  let { post: { isEdit, ogObj, _id } } = props;
  if (!isEdit) {
    return <ViewPost {...props}/>;
  } else {
    return <EditPost onSubmit={props.savePost} initialValues={ogObj} form={_id}/>
  }
}


const mapStateToProps = ({ post }, { id }) => ({
  post: post[id]
});

const mapDispatchToProps = (dispatch, { id }) => {
  return {
    onEdit: () => dispatch(enableEdit(id)),
    onLove: (uri) => dispatch(lovePost(uri)),
    savePost: (post) => dispatch(savePost(post, id))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Post)