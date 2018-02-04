import React from "react";
import { connect } from "react-redux";
import { searchByAuthor } from "reducers/search.actions";
import EditablePost from "./EditablePost";

function AuthorPosts({ posts }) {
  return <div>
    {posts.map((post, i) => <EditablePost key={i} {...post}/>)}
  </div>
}

const mapStateToProps = ({ search: { author } }, { id }) => author[id] || { posts: [] };

const mapDispatchToProps = (dispatch, { id }) => {
  dispatch(searchByAuthor(id));
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthorPosts);