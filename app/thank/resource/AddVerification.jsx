import React from "react";
import {connect} from "react-redux";
import {Field, reduxForm} from "redux-form";
import {create} from "reducers/thank/verification.actions";
import Icon from "../../components/Icon";

let AddOwnershipForm = ({ handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className="field has-addons">
                <Field name="uri" component="input" type="text" className="input control" placeholder="URL"/>
                <div className="control">
                    <a className="button is-success" onClick={handleSubmit}>
                        <Icon fa="plus"/><span>Own</span>
                    </a>
                </div>
            </div>
        </form>
    )
};

AddOwnershipForm = reduxForm({
    form: 'ownUrl'
})(AddOwnershipForm);

const AddOwnership = ({verify}) => {
    return (
        <AddOwnershipForm onSubmit={verify}/>
    )
};

const mapDispatchToProps = (dispatch, { id }) => {
    return {
        verify: (resource) => {
            dispatch(create(id, Object.assign(resource, { type: "http"})))
        }
    }
};

export default connect(undefined, mapDispatchToProps)(AddOwnership)