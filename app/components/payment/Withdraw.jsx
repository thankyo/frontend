import React, {Component} from "react";
import {connect} from "react-redux";
import { withdraw } from "../../reducers/payment/withdraw.actions";

class Withdraw extends Component {
    constructor(props) {
        super(props);
        this.state = {value: props.withdraw.amount};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.doWithdraw(this.state.value);
    }

    componentDidUpdate(prevProps) {
        if (prevProps !== undefined && prevProps.withdraw.isLoading && !this.props.withdraw.isLoading && !this.props.withdraw.isError) {
            this.setState({value: ""});
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <p className="control has-addons">
                    <input className="input is-expanded" type="number" placeholder="Amount" onChange={this.handleChange}/>
                    <button type="submit"
                            className={this.props.withdraw.isLoading ? "button is-danger is-loading" : "button is-danger"}>
                        <span className="icon"><i className="fa fa-heart"></i></span> <span>Withdraw</span>
                    </button>
                    {this.props.withdraw.isError &&
                    <p className="help is-danger title">{this.props.withdraw.error.message}</p>}
                </p>
            </form>
        )
    }
}

const mapStateToProps = ({ payment: { withdraw }}) => {
    return { withdraw };
};

const mapDispatchToProps = (dispatch) => {
    return {
        doWithdraw: (amount) => {
            dispatch(withdraw(amount))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Withdraw)