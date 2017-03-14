import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router";
import {fetchPayments} from '../../reducers/payment.action';

class PaymentTransaction extends Component {
    render() {
        return (
            <Link to={this.props.payment.path} className={this.props.item.active ? "nav-item is-active" : "nav-item"}>
                <span>{this.props.item.text}</span>
            </Link>
        );
    }
}

const Thanks = ({ payments }) => {
    return (
        <div className="section">
            <div className="content">
                {payments.map(payment => <PaymentTransaction key={payment.id} payment={payment}/>)}
                <h1>I'm Payments</h1>
            </div>
        </div>
    );
};

const mapStateToProps = ({ payment }, { id }) => {
    let payments = payment[id] ? payment[id] : [];
    return {
        payments
    };
};

const mapDispatchToProps = (dispatch, { id }) => {
    dispatch(fetchPayments(id));
    return {}
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Thanks);