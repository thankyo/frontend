import React, {Component} from "react";
import {connect} from "react-redux";
import {fetch} from "../../reducers/thank/ownership.actions";
import Resource from "../Resource";

class ResourceOwnership extends Component {
    render() {
        return (
            <div className="container">
                <p className="title">{this.props.ownership.type}</p>
                <p className="subtitle"><Resource resource={this.props.ownership.resource}/></p>
            </div>
        );
    }
}

const ResourceOwnerships = ({ own }) => {
    return (
        <div>
            {own.map(ownership => <ResourceOwnership key={ownership.resource.url} ownership={ownership}/>)}
        </div>
    );
};

const mapStateToProps = ({thank: { ownership }}, {id}) => {
    let own = ownership[id] ? ownership[id].items : [];
    return {
        own
    };
};

const mapDispatchToProps = (dispatch, {id}) => {
    dispatch(fetch(id));
    return {}
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ResourceOwnerships);