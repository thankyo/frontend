import React from "react";
import { Link } from "react-router-dom";
import { lovePost } from "reducers/post/post.actions";
import { connect } from "react-redux";

import { EditButton, LoveItButton } from "components/Icon";
import moment from "moment/moment";

function PostActions({ post, onEdit, onLove }) {
  if (post.isMy) {
    return <EditButton onClick={onEdit}/>
  }
  return <LoveItButton isLoved={post.isLoved} onLove={() => onLove(post.url)}/>
}

function PostOnTimeline(props) {
  let { post } = props;
  let { ogObj: { title, description, image: { url = "" } = {}, tags = [], pubDate }, project } = post;
  return (
    <li className="timeline-item is-primary">
      <div className="timeline-marker is-medium is-primary">
      </div>
      <div className="timeline-marker is-primary is-image is-32x32">
        <Link to={`/creator/${project.user}/project/${project._id}`}>
          <img src={project.avatar}/>
        </Link>
      </div>
      <div className="timeline-content">
        <div className="heading">
          <h1 className="is-size-6"><a href={post.url}><strong>{title}</strong></a></h1>
          <h2 className="is-size-7 small">{moment(pubDate).format("MMMM Do")}</h2>
        </div>
        <div className="content">
          {description}
          {tags.map((tag, i) => <Link key={i} to={`/search?query=${tag}`}> #{tag}</Link>)}
        </div>
        <figure className="image">
          <img src={url}/>
        </figure>
        <br/>
        <div className="media-content">
            <PostActions {...props}/>
        </div>
      </div>
    </li>
  );
}


const mapStateToProps = ({ post: { byId } }, { id }) => ({ post: byId[id] });

const mapDispatchToProps = (dispatch, { id }) => {
  return {
    onLove: (uri) => dispatch(lovePost(uri)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(PostOnTimeline)