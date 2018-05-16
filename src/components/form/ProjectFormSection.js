import React from "react";
import { Field, FieldArray, FormSection } from "redux-form";

import { max27, max54, required } from "./validation";
import customInput from "./customInput";
import Tags from "./Tags";

export default function () {
  return (
    <FormSection name="project">
      <Field
        name="avatar"
        type="url"
        component={customInput}
        label="Project Avatar"
        help="magnificent project avatar"
        isSmall
      />
      <Field
        name="title"
        type="text"
        component={customInput}
        label="Title"
        validate={[required, max27]}
        help="27 symbols of awesomeness"
        isSmall
      />
      <Field
        name="shortDescription"
        type="text"
        component={customInput}
        label="Short Description"
        validate={[required, max54]}
        help="something juicy, in 54 chars"
        isSmall
      />
      <Field
        name="description"
        type="textarea"
        component={customInput}
        label="Description"
        help="blow their mind"
        isSmall
      />
      <Field
        name="rss"
        type="url"
        component={customInput}
        label="RSS"
        help="we'll be watching every post you make"
        isSmall
      />
      <FieldArray name="tags" component={(props) => {
        let { fields } = props;
        let tags = fields.getAll() || [];
        return (
          <div className="field">
            <label className="label is-small">Tags</label>
            <Tags tags={tags} removeTag={(tag) => {fields.remove(tags.indexOf(tag))}} addTag={({ tag }) => {fields.push(tag)}}/>
            <p className="help">every post in a project will have them, <strong>choose wisely</strong></p>
          </div>
        )
      }}/>
    </FormSection>
  )
}