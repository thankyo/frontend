import React from "react";
import Post from "./Post";
import { connect } from "react-redux";
import { searchByProject } from "reducers/search.actions";

function Posts({ posts }) {
  return (
    <div>
      {posts.map((id, i) => <article className="tile" key={i}><Post id={id}/></article>)}
    </div>
  )
}

const mapStateToProps = ({ search: { project } }, { id }) => ({ posts:  project[id] || [] });

const mapDispatchToProps = (dispatch, { id }) => {
  dispatch(searchByProject(id));
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);