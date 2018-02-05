import React, { Component } from "react";
import Post from "components/Posts/Post";
import NoResults from "./NoResults";
import { connect } from 'react-redux';
import { searchByTag } from "reducers/search.actions";

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

const mapStateToProps = ({ search: { query, tags } }) => {
  return {
    query,
    tags
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchByTag: (tags) => dispatch(searchByTag(tags))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchDashboard);