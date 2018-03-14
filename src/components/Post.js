import React from "react";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import { lovePost } from "reducers/post/post.actions";
import { connect } from "react-redux";

import { EditButton, LoveItButton } from "components/Icon";
import { isMyObj } from "reducers/util/markMy";

function Post(props) {
  let { post, lovePost } = props;
  let isMy = isMyObj(post.project);
  let { ogObj: { title, description, image: { url = "" } = {}, tags = [] }, project } = post;
  return (
    <div className="columns">
      <div className="column">
        <figure className="image">
          <img src={url}/>
        </figure>
        <br/>
        <article className="media media-new-style">
          <figure className="media-left">
            <Link to={`/creator/${project.user}/project/${project._id}`}>
              <p className="image is-64x64">
                <img src={project.avatar}/>
              </p>
            </Link>
          </figure>
          <div className="media-content">
            <div className="content">
              <p>
                <a href={post.ogObj.url}><strong>{title}</strong></a>
                <br/>
                {description}
                {tags.map((tag, i) => <Link key={i} to={`/search?query=${tag}`}> #{tag}</Link>)}
              </p>
            </div>
            {!isMy ? <LoveItButton isLoved={post.isLoved} onLove={() => lovePost(post.url)}/> : <Link to={`/creator/my/post/${post._id}`}><EditButton/></Link>}
          </div>
        </article>
      </div>
    </div>
  );
}


const mapStateToProps = ({ post: { byId } }, { id }) => ({
  post: byId[id]
});

const mapDispatchToProps = (dispatch, { id }) => bindActionCreators({ lovePost }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Post)