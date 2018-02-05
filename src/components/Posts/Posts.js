import React from "react";
import OGTile from "./Post";
import { connect } from "react-redux";
import { searchByAuthor } from "reducers/search.actions";

function Posts({ posts }) {
  return <div>
    {posts.map((post, i) => <article className="tile is-child notification" key={i}><OGTile {...post}/></article>)}
  </div>
}

const mapStateToProps = ({ search: { author } }, { id }) => author[id] || { posts: [] };

const mapDispatchToProps = (dispatch, { id }) => {
  dispatch(searchByAuthor(id));
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);