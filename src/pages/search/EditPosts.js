import React, { Component } from "react";
import OGTile from "./OGTile.jsx";
import { connect } from "react-redux";
import { searchByAuthor } from "../../reducers/search.actions";
import { Field, Form, reduxForm } from "redux-form";
import { IconWithText } from "../../common/Icon";
import { fieldWithLabel, LoadingButton } from "../../common/form.utils";

import { savePost } from "../../reducers/post";


const VIEW_MODE = 0;
const EDIT_MODE = 1;

function PostEditMode({ submitting, handleSubmit }) {
  return (
    <Form onSubmit={handleSubmit}>
      <Field name="url" component={ fieldWithLabel } className="input" placeholder="Url" disabled/>
      <Field name="title" component={ fieldWithLabel } className="input" placeholder="Title" />
      <Field name="description" component={ fieldWithLabel } className="textarea" type="textarea" placeholder="Description" />
      <LoadingButton submitting={submitting} className="is-primary is-pulled-right">
        <IconWithText className="fa fa-save" text="Save"/>
      </LoadingButton>
    </Form>
  )
}

const mapStateToPostProps = ({ }, { ogObj }) => ({ initialValues: ogObj });
const mapDispatchToPostProps = (dispatch, { changeMode}) => {
  return {
    onSubmit: (post) => dispatch(savePost(post)).then(() => changeMode())
  }
};

PostEditMode = connect(mapStateToPostProps, mapDispatchToPostProps)(reduxForm({ form: "post"})(PostEditMode));

function PostViewMode(props) {
  return  (
    <div className="columns">
      <div className="column">
        <OGTile {... props}>
          <div>
            <button className="button is-primary is-pulled-right" onClick={props.changeMode}><IconWithText className="fa fa-edit" text="Edit"/>
            </button>
          </div>
        </OGTile>
      </div>
    </div>
  );
}


class MyPost extends Component {
  constructor(props) {
    super(props);
    this.state = { mode: VIEW_MODE };
  }

  handleModeChange = () => {
    this.setState((state) => ({ mode: state.mode === EDIT_MODE ? VIEW_MODE : EDIT_MODE }))
  };

  render() {
    if (this.state.mode === VIEW_MODE) {
      return <PostViewMode {... this.props} changeMode={this.handleModeChange}/>;
    } else {
      return <PostEditMode {... this.props} changeMode={this.handleModeChange}/>
    }
  }
}

function EditPosts({ posts }) {
  return <div>
    {posts.map((post, i) => <MyPost key={i} {...post}/>)}
  </div>
}

const mapStateToProps = ({ search: { author } }, { id }) => author[id] || { posts: [] };

const mapDispatchToProps = (dispatch, { id }) => {
  dispatch(searchByAuthor(id));
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(EditPosts);