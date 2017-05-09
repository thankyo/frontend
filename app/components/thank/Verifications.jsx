import React, {Component} from "react";
import {connect} from "react-redux";
import {list} from "../../reducers/thank/verification.actions";
import Resource from "../Resource";

class Verification extends Component {
    render() {
        let metaText = `<meta name='loveit-site-verification" content="${this.props.verification.verificationCode}"/>`
        return (
            <div className="container">
                <p className="subtitle">{this.props.verification.status}</p>
                <Resource resource={this.props.verification.resource}/>
                <p> {metaText}</p>
            </div>
        );
    }
}

const Verifications = ({verification}) => (
    <div>
        {verification.map(ver => <Verification key={ver.resource.uri} verification={ver}/>)}
    </div>
);


const mapStateToProps = ({thank: { verification }}, {id}) => {
    let userVerification = verification[id] ? verification[id].items : [];
    return {
        verification: userVerification
    };
};

const mapDispatchToProps = (dispatch, { id }) => {
    dispatch(list(id));
    return {}
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Verifications);
