import React from "react";
import OGTile from "./OGTile.jsx";
import { connect } from "react-redux";
import { searchByAuthor } from "../../reducers/search.actions";

function Posts({ posts }) {
  return <div>
    {posts.map((post, i) => <OGTile key={i} {...post}/>)}
  </div>
}

const mapStateToProps = ({ search: { author } }, { id }) => author[id] || { posts: [] };

const mapDispatchToProps = (dispatch, { id }) => {
  dispatch(searchByAuthor(id));
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);