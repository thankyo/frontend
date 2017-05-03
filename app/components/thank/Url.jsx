import React, {Component} from "react";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {thank} from "../../reducers/thank/url.actions";

class ThankUrlForm extends Component {
    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
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
    }
}

ThankUrlForm = reduxForm({
    form: 'thankUrl'
})(ThankUrlForm);

class ThankUrl extends Component {
    render() {
        return (
            <ThankUrlForm onSubmit={this.props.thankByUrl}/>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        thankByUrl: (url) => {
            dispatch(thank(url));
        }
    }
};

export default connect(undefined, mapDispatchToProps)(ThankUrl)