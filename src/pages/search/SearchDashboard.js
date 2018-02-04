import React from "react";
import OGTile from "components/Posts/OGTile";
import NoResults from "./NoResults";
import { connect } from 'react-redux';
import { searchByTag } from "reducers/search.actions";
import queryString from "query-string";
import { withRouter } from "react-router-dom";

function SearchDashboard({ tags, searchByTag }) {
  if (tags.length === 0) {
    return <NoResults/>
  }

  return (
    <div className="tile is-ancestor">
      <div className="tile is-vertical is-4">
        <div className="tile">
          <div className="tile is-parent is-vertical">
            {tags.map((post, i) => i % 3 === 0 && <OGTile key={i} {...post}/>)}
          </div>
        </div>
      </div>
      <div className="tile is-vertical is-4">
        <div className="tile">
          <div className="tile is-parent is-vertical">
            {tags.map((post, i) => i % 3 === 1 && <OGTile key={i} {...post}/>)}
          </div>
        </div>
      </div>
      <div className="tile is-vertical is-4">
        <div className="tile">
          <div className="tile is-parent is-vertical">
            {tags.map((post, i) => i % 3 === 2 && <OGTile key={i} {...post}/>)}
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = ({ search: { tags } }) => ({ tags });

const mapDispatchToProps = (dispatch, { history: { location } }) => {
  let params = queryString.parse(location.search);
  dispatch(searchByTag(params.query));
  return {
    searchByTag: (tags) => dispatch(searchByTag(tags))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchDashboard));