import React, {Component} from "react";
import {connect} from "react-redux";
import {own} from "../../reducers/thank/ownership.actions";

class AddOwnership extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.own(this.state.value);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <p className="control has-addons">
                    <input className="input is-expanded" type="text" placeholder="URL" onChange={this.handleChange}/>
                    <button type="submit" className={this.props.thank.isLoading ? "button is-danger is-loading" : "button is-danger"}>
                        <span className="icon"><i className="fa fa-bank"></i></span> <span>Own</span>
                    </button>
                    {this.props.thank.isError &&
                    <p className="help is-danger title">{this.props.thank.error.message}</p>}
                </p>
            </form>
        )
    }
}

const mapStateToProps = ({thank: { url }}) => {
    return { thank: url };
};

const mapDispatchToProps = (dispatch) => {
    return {
        own: (uri) => {
            let ownership = {
                type: "full",
                resource: {
                    type: "http",
                    uri
                }
            };
            dispatch(own(ownership))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddOwnership)