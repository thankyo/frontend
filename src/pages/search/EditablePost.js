import React, { Component } from "react";
import OGTile from "./OGTile.jsx";
import { connect } from "react-redux";
import { Field, Form, reduxForm, FieldArray } from "redux-form";
import { IconWithText } from "../../components/Icon";
import { fieldWithLabel, LoadingButton } from "../../components/form/form.utils";

import { savePost } from "../../reducers/post.actions";
import Tags from "../../components/form/Tags";

const VIEW_MODE = 0;
const EDIT_MODE = 1;

function PostEditMode({ submitting, handleSubmit }) {
  return (
    <Form onSubmit={handleSubmit}>
      <Field name="url" component={ fieldWithLabel } className="input" placeholder="Url" disabled/>
      <hr/>
      <Field name="image.url" component={fieldWithLabel} type="image" className="input" placeholder="Image"/>
      <hr/>
      <Field name="title" component={ fieldWithLabel } className="input" placeholder="Title" />
      <Field name="description" component={ fieldWithLabel } className="textarea" type="textarea" placeholder="Description" />
      <FieldArray name="tags" component={(props) => {
        let { fields } = props;
        let tags = fields.getAll() || [];
        return (
          <div className="field">
            <label className="label">Tags</label>
            <Tags tags={tags} removeTag={(tag) => { fields.remove(tags.indexOf(tag))}} addTag={({ tag }) => { fields.push(tag) }}/>
          </div>
        )
      }}/>
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
            <button className="button is-primary is-pulled-right" onClick={props.changeMode}>
              <IconWithText className="fa fa-edit" text="Edit"/>
            </button>
          </div>
        </OGTile>
      </div>
    </div>
  );
}


export default class EditablePost extends Component {
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
