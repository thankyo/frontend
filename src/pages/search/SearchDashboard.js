import React, { Component } from "react";
import { connect } from 'react-redux';

import Post from "components/Post";
import { searchByTag } from "reducers/post/post.actions";

import NoResults from "./NoResults";

class SearchDashboard extends Component {
  componentWillMount() {
    let { query, searchByTag } = this.props;
    searchByTag(query);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.query !== this.props.query) {
      this.props.searchByTag(nextProps.query);
    }
  }

  render() {
    const { tags } = this.props;
    if (tags.length === 0) {
      return <NoResults/>
    }

    return (
      <div className="tile is-ancestor">
        <div className="tile is-vertical is-4">
          <div className="tile">
            <div className="tile is-parent is-vertical">
              {tags.map((id, i) => i % 3 === 0 && <Post key={i} id={id}/>)}
            </div>
          </div>
        </div>
        <div className="tile is-vertical is-4">
          <div className="tile">
            <div className="tile is-parent is-vertical">
              {tags.map((id, i) => i % 3 === 1 && <Post key={i} id={id}/>)}
            </div>
          </div>
        </div>
        <div className="tile is-vertical is-4">
          <div className="tile">
            <div className="tile is-parent is-vertical">
              {tags.map((id, i) => i % 3 === 2 && <Post key={i} id={id}/>)}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ navigation: { query }, post: { byTag } }) => {
  return {
    query,
    tags: byTag
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchByTag: (tags) => dispatch(searchByTag(tags))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchDashboard);