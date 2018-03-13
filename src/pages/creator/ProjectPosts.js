import React, { Fragment } from "react";
import PostOnTimeline from "components/PostOnTimeline";
import { connect } from "react-redux";
import { searchByProject } from "reducers/post/post.actions";

function Posts({ posts }) {
  return (
    <ul className="timeline">
      {posts.map((id, i) => <PostOnTimeline key={i} id={id}/>)}
    </ul>
  )
}

const mapStateToProps = ({ post: { byProject } }, { id }) => ({ posts:  byProject[id] || [] });

const mapDispatchToProps = (dispatch, { id }) => {
  dispatch(searchByProject(id));
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);