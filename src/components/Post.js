import React from "react";
import { Field, FieldArray, Form, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { enableEdit, lovePost, savePost } from "reducers/post/post.actions";
import { connect } from "react-redux";

import { EditButton, SaveIcon } from "components/Icon";
import { fieldWithLabel, LoadingButton } from "components/form/form.utils";
import Tags from "components/form/Tags";
import { LoveItButton } from "components/Icon";

function EditPost({ submitting, initialValues, handleSubmit }) {
  return (
    <div className="columns">
      <div className="column">

        <Form onSubmit={handleSubmit}>
          <Field name="url" component={fieldWithLabel}  placeholder="Url" disabled/>
          <hr/>
          <Field name="image.url" component={fieldWithLabel} type="image" placeholder="Image"/>
          <hr/>
          <Field name="title" component={fieldWithLabel} placeholder="Title"/>
          <Field name="description" component={fieldWithLabel} className="textarea" type="textarea" placeholder="Description"/>
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
            <SaveIcon>Save</SaveIcon>
          </LoadingButton>
        </Form>
      </div>
    </div>
  )
}

EditPost = reduxForm()(EditPost);

function PostActions({ post, onEdit, onLove }) {
  if (post.isMy) {
    return <EditButton onClick={onEdit}/>
  }
  return <LoveItButton isLoved={post.isLoved} onLove={() => onLove(post.url)}/>
}

function ViewPost(props) {
  let { post } = props;
  let { ogObj: { title, description, image: { url = "" } = {}, tags = [] }, project } = post;
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
                <a href={post.ogObj.url}><strong>{title}</strong></a>
                <br/>
                {description}
                {tags.map((tag, i) => <Link key={i} to={`/search?query=${tag}`}> #{tag}</Link>)}
              </p>
            </div>
            <PostActions {... props}/>
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


const mapStateToProps = ({ post: { byId } }, { id }) => ({
  post: byId[id]
});

const mapDispatchToProps = (dispatch, { id }) => {
  return {
    onEdit: () => dispatch(enableEdit(id)),
    onLove: (uri) => dispatch(lovePost(uri)),
    savePost: (post) => dispatch(savePost(post, id))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Post)