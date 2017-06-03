import React, {Component} from "react";
import {connect} from "react-redux";
import {listOwnership} from "reducers/thank/ownership.actions";
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
};

const mapStateToProps = ({thank: {ownership}}, {id}) => {
    let own = ownership[id] ? ownership[id].items : [];
    return {
        own
    };
};

const mapDispatchToProps = (dispatch, {id}) => {
    dispatch(listOwnership(id));
    return {}
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OwnedResources);
