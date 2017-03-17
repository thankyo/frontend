import React, {Component} from "react";
import {connect} from "react-redux";
import {thank} from "../reducers/thank.actions";

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
        this.props.thankByUrl(this.state.value)
        this.setState({value: ""});
    }

    render() {
        return (
            <form className="control has-addons" onSubmit={this.handleSubmit}>
                <input className="input is-expanded" type="text" placeholder="URL" value={this.state.value}
                       onChange={this.handleChange}/>
                <button type="submit"
                        className={this.props.thank.isLoading ? "button is-info is-loading" : "button is-info"}>
                    Thank
                </button>
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