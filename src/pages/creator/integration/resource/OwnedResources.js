import React, { Component } from "react";
import { connect } from "react-redux";
import { get } from "../../../../reducers/thank/resource.actions";
import Resource from "../../../../common/Resource";
import Icon from "../../../../common/Icon";

class OwnedResource extends Component {
  render() {
    return (
      <tr>
        <td className="is-narrow">
          <Icon fa="check"/>
        </td>
        <td>
          <Resource resource={this.props.resource}/>
        </td>
        <td>

        </td>
      </tr>
    );
  }
}

const ListOwnedResource = ({ own }) => {
  if (!own) {
    return null;
  }
  return (
    <div className="content">
      <h4 className="title is-4">Owned</h4>
      <table className="table is-grouped">
        <tbody>
        {own.map(resource => <OwnedResource key={resource.uri} resource={resource}/>)}
        </tbody>
      </table>
    </div>
  );
};

const NoResources = () => {
  return (
    <h6 className="title is-6 is-warning has-text-centered"><i>No verified resources</i></h6>
  )
};

const OwnedResources = ({ own }) => {
  return (
    <div className="support-block has-text-centered notification">
      {own.length === 0 ? <NoResources/> : <ListOwnedResource resources={ own }/>}
    </div>
  );
};

const mapStateToProps = ({ thank: { resource } }, { id }) => {
  let own = resource[id] ? resource[id].owns : [];
  return {
    own
  };
};

const mapDispatchToProps = (dispatch, { id }) => {
  dispatch(get(id));
  return {}
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OwnedResources);
