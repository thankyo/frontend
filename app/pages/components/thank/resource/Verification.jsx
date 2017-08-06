import React from "react";
import {connect} from "react-redux";
import {verify, cancelVerification, confirm} from "../../../../reducers/thank/resource.actions";
import AddVerification from './AddVerification';
import PendingVerification from './PendingVerification';

let Verification = ({ verification, verify, cancel, confirm }) => {
    if (verification === undefined || verification.status === "verified") {
        return <AddVerification onSubmit={verify}></AddVerification>
    } else {
        return <PendingVerification {...verification} cancel={cancel} confirm={confirm}/>
    }
};

const mapStateToProps = ({ thank: { resource }}, { id }) => {
    let { verification } = resource[id] ? resource[id] : {};
    return { verification };
};

const mapDispatchToProps = (dispatch, { id }) => {
    return {
        verify: (resource) => {
            dispatch(verify(id, Object.assign(resource, { type: "http"})))
        },
        cancel: () => {
            dispatch(cancelVerification(id))
        },
        confirm: () => {
            dispatch(confirm(id))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Verification)