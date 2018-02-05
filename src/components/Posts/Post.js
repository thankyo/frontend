import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, FieldArray, Form, reduxForm } from "redux-form";
import { Link } from "react-router-dom";

import { IconWithText } from "components/Icon";
import { fieldWithLabel, LoadingButton } from "components/form/form.utils";
import Tags from "components/form/Tags";

import { enableEdit, lovePost, savePost } from "reducers/post.actions";

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

function PostView({ resource: { uri }, ogObj: { title, description, image: { url = "" } = {}, tags = [] }, project: { user }, children, onLove, isLoved, isMy }) {
  return (
    <div>
      <figure className="image">
        <img src={url}/>
      </figure>
      <p className="title">{title}</p>
      <div className="content">
        <div>
          {description}
        </div>
        <div className="tags">
          {tags.map((tag, i) => <Link key={i} to={`/search?query=${tag}`} className="tag is-black">{tag}</Link>)}
        </div>
        <br/>
        <button className="button is-primary" onClick={() => onLove(uri)} disabled={isLoved}>Love it</button>
        {children}
      </div>
    </div>
  )
}

function MyPost(props) {
  return (
    <div className="columns">
      <div className="column">
        <PostView {...props}>
          <div>
            <button className="button is-primary is-pulled-right" onClick={props.onEdit}>
              <IconWithText className="fa fa-edit" text="Edit"/>
            </button>
          </div>
        </PostView>
      </div>
    </div>
  );
}

function Post(props) {
  let { post } = props;
  if (post.isMy) {
    if (!post.isEdit) {
      return <MyPost {...post} onEdit={props.enableEdit} onLove={props.onLove}/>;
    } else {
      return <EditPost onSubmit={props.savePost} initialValues={post.ogObj} form={post._id}/>
    }
  } else {
    return <PostView {...post}/>
  }
}


const mapStateToProps = ({ post }, { id }) => ({
  post: post[id]
});

const mapDispatchToProps = (dispatch, { id }) => {
  return {
    enableEdit: () => dispatch(enableEdit(id)),
    onLove: (uri) => dispatch(lovePost(uri)),
    savePost: (post) => dispatch(savePost(post))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Post)