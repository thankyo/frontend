import React from "react";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {thank} from "reducers/thank/url.actions";

let ThankUrl = ({ handleSubmit }) => {
    return (
        <form onSubmit={ handleSubmit }>
            <div className="field has-addons">
                <p className="control is-expanded">
                    <Field name="url" component="input" type="text" className="input"/>
                </p>
                <p className="control">
                    <button className="button is-success" type="submit">
                        Love It
                    </button>
                </p>
            </div>
        </form>
    )
};

ThankUrl = reduxForm({
    form: 'thankUrl'
})(ThankUrl);

const ThankUrlToReducer = ({ thankByUrl }) => {
    return (<ThankUrl onSubmit={thankByUrl} />)
};

const mapDispatchToProps = (dispatch) => {
    return {
        thankByUrl: (url) => {
            dispatch(thank(url));
        }
    }
};

export default connect(undefined, mapDispatchToProps)(ThankUrlToReducer);