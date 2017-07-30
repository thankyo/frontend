import React from "react";
import {Field, reduxForm} from "redux-form";
import Icon from "../../components/Icon";

let AddVerification = ({handleSubmit}) => {
    return (
        <div className="content">
            <h4 className="title is-4">Verify</h4>
            <form onSubmit={handleSubmit}>
                <div className="field has-addons">
                    <Field name="uri" component="input" type="text" className="input control" placeholder="URL"/>
                    <div className="control">
                        <a className="button is-success" onClick={handleSubmit}>
                            <Icon fa="check" text="Verify"/>
                        </a>
                    </div>
                </div>
            </form>
        </div>
    )
};

AddVerification = reduxForm({
    form: 'verifyResource'
})(AddVerification);

export default AddVerification;