import React from "react";
import {connect} from "react-redux";
import {Field, reduxForm} from "redux-form";
import {create} from "../../reducers/thank/verification.actions";

let AddOwnershipForm = ({ handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className="field has-addons">
                <Field name="uri" component="input" type="text" className="input control" placeholder="URL"/>
                <p className="control">
                    <button className="button is-success" type="submit">
                        Own
                    </button>
                </p>

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
            let ownership = {
                ownershipType: "full",
                resource: Object.assign(resource, { type: "http"})
            };
            dispatch(create(id, ownership))
        }
    }
};

export default connect(undefined, mapDispatchToProps)(AddOwnership)