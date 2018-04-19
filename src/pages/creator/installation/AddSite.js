import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { InstallIcon, DibsIcon } from "components/Icon";
import RefreshLink from "components/RefreshLink";
import { enrichProject } from "reducers/project.actions";

class AddSite extends Component {
  handleSubmit = () => {
    let { enrichProject } = this.props;
    return enrichProject(this.refs.url.value).then(() => this.refs.url.value = "");
  };

  render() {
    return (
      <Fragment>
        <li className="timeline-header is-success">
        <span className="tag is-primary">
          <DibsIcon>Dibs</DibsIcon>
        </span>
        </li>
        <li className="timeline-item is-primary">
          <div className="timeline-marker is-primary">
          </div>
          <div className="timeline-content">
            <p className="heading">
              We'll trust that you own the site
            </p>
            <div className="field has-addons">
              <div className="control">
                <input type="text" className="input is-small" ref="url"/>
                <div className="help">We'll verify manually later on</div>
              </div>
              <div className="control">
                <RefreshLink className="button is-small is-primary" onClick={this.handleSubmit}>
                  <InstallIcon>Add</InstallIcon>
                </RefreshLink>
              </div>
            </div>
          </div>
        </li>
      </Fragment>
    );
  }
}

const AddSiteRedux = connect(undefined, (dispatch) => bindActionCreators({ enrichProject }, dispatch))(AddSite);

export default AddSiteRedux;