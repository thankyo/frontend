import React, {Component} from "react";
import {connect} from "react-redux";
import {list, remove, verify} from "reducers/thank/verification.actions";
import Resource from "components/Resource";
import Icon from "components/Icon";

class Verification extends Component {
    render() {
        let metaText = `<meta name='loveit-site-verification" content="${this.props.verification.verificationCode}"/>`
        return (
            <tr>
                <td className="is-one-third"><Resource resource={this.props.verification.resource}/></td>
                <td className="is-hidden-mobile">{metaText}</td>
                <td className="is-one-third">
                    <div className="field has-addons">
                        <p className="control">
                            <button onClick={this.props.verify} className="button is-primary">
                                <Icon fa="check"/>
                                <span className="is-hidden-mobile">Verify</span>
                            </button>
                        </p>
                        <p className="control">
                            <button onClick={this.props.remove} className="button">
                                <Icon fa="remove"/><span className="is-hidden-mobile">Delete</span>
                            </button>
                        </p>
                    </div>
                </td>
            </tr>
        );
    }
}

const Verifications = ({verification, remove, verify}) => (
    <table className="table is-grouped">
        <thead>
        <tr>
            <td className="is-one-third"><Icon fa="html5"/> HTTP</td>
            <td className="is-one-third is-hidden-mobile">Meta</td>
            <td className="is-one-third"></td>
        </tr>
        </thead>
        <tbody>
        {verification.map(ver => <Verification key={ver.resource.uri} verification={ver} remove={() => remove(ver.id)}
                                               verify={() => verify(ver.id)}/>)}
        </tbody>
    </table>
);


const mapStateToProps = ({thank: {verification}}, {id}) => {
    let userVerification = verification[id] ? verification[id].items : [];
    return {
        verification: userVerification
    };
};

const mapDispatchToProps = (dispatch, {id}) => {
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
