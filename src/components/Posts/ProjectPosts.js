import React from "react";
import OGTile from "./OGTile";
import { connect } from "react-redux";
import { searchByProject } from "reducers/search.actions";

function Posts({ posts }) {
  return <div>
    {posts.map((post, i) => <article className="tile is-child notification" key={i}><OGTile {...post}/></article>)}
  </div>
}

const mapStateToProps = ({ search: { project } }, { id }) => project[id] || { posts: [] };

const mapDispatchToProps = (dispatch, { id }) => {
  dispatch(searchByProject(id));
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);