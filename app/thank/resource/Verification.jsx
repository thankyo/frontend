import React from "react";
import {connect} from "react-redux";
import {verify, cancelVerification} from "../../reducers/thank/resource.actions";
import AddVerification from './AddVerification';
import PendingVerification from './PendingVerification';

let Verification = ({ verification, verify, cancel }) => {
    if (verification === undefined) {
        return <AddVerification onSubmit={verify}></AddVerification>
    } else {
        return <PendingVerification {...verification} cancel={cancel}/>
    }
};

const mapStateToProps = ({ thank: { resource }}, { id }) => {
    let { verification } = resource[id];
    return { verification };
};

const mapDispatchToProps = (dispatch, { id }) => {
    return {
        verify: (resource) => {
            dispatch(verify(id, Object.assign(resource, { type: "http"})))
        },
        cancel: () => {
            dispatch(cancelVerification(id))
        }

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Verification)