import React from "react";
import Post from "components/Post";
import { connect } from "react-redux";
import { searchByProject } from "reducers/post/post.actions";

let ProjectPosts = ({ posts }) => (
  <ul className="timeline">
    {posts.map((id, i) => <Post key={i} id={id}/>)}
  </ul>
);

const mapStateToProps = ({ post: { byProject } }, { id }) => ({ posts: byProject[id] || [] });

const mapDispatchToProps = (dispatch, { id }) => {
  dispatch(searchByProject(id));
  return {};
};

ProjectPosts = connect(mapStateToProps, mapDispatchToProps)(ProjectPosts);

export default ProjectPosts;