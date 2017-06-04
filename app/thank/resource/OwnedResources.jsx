import React, {Component} from "react";
import {connect} from "react-redux";
import {get} from "../../reducers/thank/resource.actions";
import Resource from "components/Resource";
import Icon from "../../components/Icon";

class OwnedResource extends Component {
    render() {
        return (
            <tr className="container">
                <td>
                    <Resource resource={this.props.resource}/>
                </td>
            </tr>
        );
    }
}

const OwnedResources = ({own}) => {
    if (own.length > 0) {
        return (
            <table className="table is-grouped">
                <thead>
                <tr>
                    <td><Icon fa="html5"/>HTTP</td>
                    <td></td>
                </tr>
                </thead>
                <tbody>
                    {own.map(resource => <OwnedResource key={resource.uri} resource={resource}/>)}
                </tbody>
            </table>
        );
    } else {
        return (
            <h4 className="title is-5 is-warning">No verified resources</h4>
        )
    }
};

const mapStateToProps = ({thank: { resource }}, {id}) => {
    let own = resource[id] ? resource[id].owns : [];
    return {
        own
    };
};

const mapDispatchToProps = (dispatch, {id}) => {
    dispatch(get(id));
    return {}
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OwnedResources);
