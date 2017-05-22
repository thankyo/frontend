import {fetch as fetchUser} from "reducers/user.actions";
import {listTransactions as fetchPaymentTransactions} from "./transaction.actions";

export function paymentSuccess() {
    return (dispatch) => {
        dispatch(fetchUser("my"));
        dispatch(fetchPaymentTransactions("my"));
    }
}