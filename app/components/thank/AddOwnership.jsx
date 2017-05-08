import React from "react";
import {connect} from "react-redux";
import {Field, reduxForm} from "redux-form";
import {own} from "../../reducers/thank/ownership.actions";

let AddOwnershipForm = ({ handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className="field has-addons">
                <Field name="uri" component="input" type="text" className="input" placeholder="URL"/>
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

const AddOwnership = ({own}) => {
    return (
        <AddOwnershipForm onSubmit={own}/>
    )
};

const mapDispatchToProps = (dispatch) => {
    return {
        own: (resource) => {
            let ownership = {
                ownershipType: "full",
                resource: Object.assign(resource, { type: "http"})
            };
            dispatch(own(ownership))
        }
    }
};

export default connect(undefined, mapDispatchToProps)(AddOwnership)