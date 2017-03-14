import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchPayments} from "../reducers/payment.action";

class PaymentTransaction extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.payment.operation}</td>
                <td>{this.props.payment.resource}</td>
                <td>{this.props.payment.created}</td>
            </tr>
        );
    }
}

const Payments = ({payments}) => {
    return (
        <table className="table">
            <thead>
            <tr>
                <th><abbr title="Operation">Operation</abbr></th>
                <th>Resource</th>
                <th><abbr title="Date">Date</abbr></th>
            </tr>
            </thead>
            <tbody>
            {payments.map(payment => <PaymentTransaction key={payment.id} payment={payment}/>)}
            </tbody>
        </table>
    );
};

const mapStateToProps = ({ payment }, {id}) => {
    let payments = payment[id] ? payment[id] : [];
    return {
        payments
    };
};

const mapDispatchToProps = (dispatch, {id}) => {
    dispatch(fetchPayments(id));
    return {}
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Payments);