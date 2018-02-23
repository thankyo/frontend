import React from "react";
import Post from "components/Post";
import { connect } from "react-redux";
import { searchByProject } from "reducers/post/post.actions";

function Posts({ posts }) {
  return (
    <div>
      {posts.map((id, i) => <article className="tile" key={i}><Post id={id}/></article>)}
    </div>
  )
}

const mapStateToProps = ({ post: { byProject } }, { id }) => ({ posts:  byProject[id] || [] });

const mapDispatchToProps = (dispatch, { id }) => {
  dispatch(searchByProject(id));
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);