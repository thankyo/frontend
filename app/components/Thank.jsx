import React, {Component} from "react";
import {connect} from "react-redux";
import {thank} from "../reducers/thank/thank.actions";

class Thank extends Component {
    constructor(props) {
        super(props);
        this.state = {value: props.thank.url};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.thankByUrl(this.state.value);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps !== undefined && prevProps.thank.isLoading && !this.props.thank.isLoading && !this.props.thank.isError) {
            this.setState({value: ""});
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <p className="control has-addons">
                    <input className="input is-expanded" type="text" placeholder="URL"
                           onChange={this.handleChange}/>
                    <button type="submit"
                            className={this.props.thank.isLoading ? "button is-danger is-loading" : "button is-danger"}>
                        <span className="icon"><i className="fa fa-heart"></i></span> <span>LOVE IT</span>
                    </button>
                    {this.props.thank.isError &&
                    <p className="help is-danger title">{this.props.thank.error.message}</p>}
                </p>
            </form>
        )
    }
}

const mapStateToProps = ({thank}) => {
    return {thank};
};

const mapDispatchToProps = (dispatch) => {
    return {
        thankByUrl: (url) => {
            dispatch(thank(url))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Thank)