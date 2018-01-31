import React, { Component } from "react";
import PropTypes from "prop-types";
import { IconWithText } from "../Icon";

class AddTagForm extends Component {
  constructor(props) {
    super(props);

    this.state = { value: "" }
  }

  handleKeyDown = (evt) => {
    if (evt.keyCode === 13) {
      this.handleSubmit()
    }
  };

  handleChange = (evt) => {
    evt.preventDefault();

    this.setState({ value: evt.currentTarget.value })
  };

  handleSubmit = () => {
    let { value } = this.state;
    let { onSubmit } = this.props;
    if (value.trim() !== "") {
      onSubmit({ tag: value.trim() });
      this.setState({ value: "" });
    }
  };

  render() {
    return (
      <div className="field has-addons">
        <div className="control is-expanded">
          <input type="text" className="input is-small" value={this.state.value} placeholder="Tag" autoComplete="off" onKeyDown={this.handleKeyDown} onChange={this.handleChange}/>
        </div>
        <p className="control">
          <a className="button is-small is-primary" type="submit" onClick={this.handleSubmit}>
            <IconWithText className="fa fa-plus-circle" text="Add"/>
          </a>
        </p>
      </div>
    );
  }
}

export default function Tags({ tags, addTag, removeTag }) {
  return (
    <div>
      <div className="field is-grouped is-grouped-multiline">
        {tags.map((tag, i) => (
          <div key={i} className="control">
            <div className="tags has-addons">
              <span className="tag">{tag}</span>
              <a className="tag is-delete is-dark" onClick={() => removeTag(tag)}/>
            </div>
          </div>
        ))}
      </div>
      <br/>
      <AddTagForm onSubmit={addTag}/>
    </div>
  );
}

Tags.propTypes = {
  tags: PropTypes.array.isRequired,
  addTag: PropTypes.func.isRequired,
  removeTag: PropTypes.func.isRequired
};