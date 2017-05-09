import React, {Component} from "react";
import {connect} from "react-redux";
import {list, remove, verify} from "../../reducers/thank/verification.actions";
import Resource from "../Resource";

class Verification extends Component {
    render() {
        let metaText = `<meta name='loveit-site-verification" content="${this.props.verification.verificationCode}"/>`
        return (
            <tr>
                <td><button onClick={this.props.verify} className="button is-primary">Verify</button></td>
                <td>{this.props.verification.status}</td>
                <td><Resource resource={this.props.verification.resource}/></td>
                <td>{metaText}</td>
                <td><button onClick={this.props.remove} className="button"><span className="fa fa-remove"></span><span>Delete</span></button></td>
            </tr>
        );
    }
}

const Verifications = ({verification, remove, verify}) => (
    <table className="table is-grouped">
        <thead>
            <tr>
                <td></td>
                <td>Status</td>
                <td>Resource</td>
                <td>Meta</td>
                <td></td>
            </tr>
        </thead>
        <tbody>
            {verification.map(ver => <Verification key={ver.resource.uri} verification={ver} remove={() => remove(ver.id)} verify={() => verify(ver.id)}/>)}
        </tbody>
    </table>
);


const mapStateToProps = ({thank: { verification }}, {id}) => {
    let userVerification = verification[id] ? verification[id].items : [];
    return {
        verification: userVerification
    };
};

const mapDispatchToProps = (dispatch, { id }) => {
    dispatch(list(id));
    return {
        remove: (ver) => dispatch(remove(id, ver)),
        verify: (ver) => dispatch(verify(id, ver)),
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Verifications);
