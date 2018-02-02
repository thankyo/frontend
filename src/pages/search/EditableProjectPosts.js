import React from "react";
import { searchByProject } from "../../reducers/search.actions";
import { connect } from "react-redux";
import EditablePost from "./EditablePost";

function ProjectPosts({ posts }) {
  return <div>
    <p key={1} className="title is-5">Posts</p>,
    {posts.map((post, i) => <EditablePost key={i} {...post}/>)}
  </div>
}

const mapStateToProps = ({ search: { project } }, { id }) => {
  return project[id] || { posts: [] };
};

const mapDispatchToProps = (dispatch, { id }) => {
  dispatch(searchByProject(id));
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectPosts);