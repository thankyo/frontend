import React from "react";
import { connect } from "react-redux";
import { getProject } from "../../reducers/project.actions";
import Loading from "../../components/Loading";

function ViewProject({ avatar, title, description, user, _id, tags, resource }) {
  if (!_id) {
    return <div className="has-text-centered">
      <Loading/>
    </div>
  }

  return (
    <div>
      <div className="profile">
        <div className="columns">
          <div className="column is-one-third">
            <div className="project-image">
              <figure className="image is-1by1 is-small">
                <img src={avatar} width={100} height={100} className="is-centered"/>
              </figure>
              <br/>
            </div>
          </div>
          <div className="column is-two-third">
            <p className="title">{title}</p>
            <p className="subtitle">{description}</p>
            <p className="subtitle is-6"><a href={`//${resource.uri}`}>{resource.uri}</a></p>
            <div className="field is-grouped is-grouped-multiline">
              <div className="tags">
                {tags.map((tag, i) => (<span key={i} className="tag">{tag}</span>))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = ({ project: { byId } }, { id }) => (byId[id] || {});
const mapDispatchToProps = (dispatch, { id }) => {
  dispatch(getProject(id));
  return ({
    loadProject: () => dispatch(getProject(id))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewProject)