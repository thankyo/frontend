import React, { Component } from "react";
import OGTile from "./OGTile.jsx";
import { connect } from "react-redux";
import { searchByAuthor } from "../../reducers/search.actions";
import { IconWithText } from "../../common/Icon";

const VIEW_MODE = 0;
const EDIT_MODE = 1;

class EditPost extends Component {
  constructor(props) {
    super(props);
    this.state = { mode: VIEW_MODE };
  }

  handleModeChange = () => {
    this.setState((state) => ({ mode: state.mode === EDIT_MODE ? VIEW_MODE : EDIT_MODE }))
  };

  render() {
    if (this.state.mode === VIEW_MODE) {
      return (
        <div className="columns">
          <div className="column">
            <OGTile {...this.props}>
              <div>
                <button className="button is-primary is-pulled-right" onClick={this.handleModeChange}><IconWithText className="fa fa-edit" text="Edit"/>
                </button>
              </div>
            </OGTile>
          </div>
        </div>
      );
    } else {
      return (
        <div className="columns">
          <div className="column">
            <h1 className="title">Edit</h1>
            <button className="button is-primary is-pulled-right" onClick={this.handleModeChange}>Save</button>
          </div>
        </div>
      )
    }
  }
}

function EditPosts({ posts }) {
  return <div>
    {posts.map((post, i) => <EditPost key={i} {...post}/>)}
  </div>
}

const mapStateToProps = ({ search: { author } }, { id }) => author[id] || { posts: [] };

const mapDispatchToProps = (dispatch, { id }) => {
  dispatch(searchByAuthor(id));
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(EditPosts);