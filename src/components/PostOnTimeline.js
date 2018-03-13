import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { lovePost } from "reducers/post/post.actions";
import { connect } from "react-redux";

import { EditButton, LoveItButton } from "components/Icon";

function PostActionWrap({ children }) {
  return (
    <nav className="level is-mobile">
      <div className="level-left">
        <div className="level-item">
          {children}
        </div>
      </div>
    </nav>
  )
}

function PostActions({ post, onEdit, onLove }) {
  if (post.isMy) {
    return (
      <PostActionWrap>
        <EditButton onClick={onEdit}/>
      </PostActionWrap>
    )
  }
  return <LoveItButton isLoved={post.isLoved} onLove={() => onLove(post.url)}/>
}

function PostOnTimeline(props) {
  let { post } = props;
  let { ogObj: { title, description, image: { url = "" } = {}, tags = [] }, project } = post;
  return (
    <Fragment>
      <li className="timeline-item is-primary">
        <div className="timeline-marker is-medium is-primary">
        </div>
        <div className="timeline-content">
          <div className="heading">
            <h1 className="is-size-7"><a href={post.url}><strong>{title}</strong></a></h1>
          </div>
          <figure className="image">
            <img src={url}/>
          </figure>
          <div className="media media-new-style">
            <figure className="media-left">
              <Link to={`/creator/${project.user}/project/${project._id}`}>
                <p className="image is-64x64">
                  <img src={project.avatar}/>
                </p>
              </Link>
            </figure>
            <br/>
            <div className="media-content">
              <div className="content">
                {description}
                {tags.map((tag, i) => <Link key={i} to={`/search?query=${tag}`}> #{tag}</Link>)}
              </div>
              <PostActions {...props}/>
            </div>
          </div>
        </div>
      </li>
    </Fragment>
  );
}


const mapStateToProps = ({ post: { byId } }, { id }) => ({ post: byId[id] });

const mapDispatchToProps = (dispatch, { id }) => {
  return {
    onLove: (uri) => dispatch(lovePost(uri)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(PostOnTimeline)