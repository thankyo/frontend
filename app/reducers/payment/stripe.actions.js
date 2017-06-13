import authService from "service/auth";
import {paymentSuccess} from "./payment.actions";

export const STRIPE_PROCESSING_START = "STRIPE_PROCESSING_START";
export const STRIPE_PROCESSING_SUCCESS = "STRIPE_PROCESSING_SUCCESS";
export const STRIPE_PROCESSING_ERROR = "STRIPE_PROCESSING_ERROR";

function processingStart(token) {
    return {
        type: STRIPE_PROCESSING_START,
        payload: {
            token
        }
    }
}

function processingSuccess(result) {
    return {
        type: STRIPE_PROCESSING_SUCCESS,
        payload: {
            result
        }
    }
}

function processingError(error) {
    return {
        type: STRIPE_PROCESSING_ERROR,
        payload: {
            error
        }
    }
}

function processToken(charge, token) {
    return (dispatch) => {
        dispatch(processingStart(token));
        let req = new Request(
            "/api/v1/payment/charge/my/account",
            {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(token.id)
            });
        authService.signAndFetch(req, dispatch).
        then((success) => {
            dispatch(processingSuccess(success));
            dispatch(paymentSuccess());
        }).catch((err) => dispatch(processingError(error)))
    }
}


export function process(charge) {
    return (dispatch) => {
        StripeButton.open({
            key: 'pk_test_wZ8YJXCwtdpqUHDBDM5p5QSj',
            locale: 'auto',
            currency: charge.currency,
            amount: charge.amount * 100,
            token: (token) => dispatch(processToken(charge, token))
        });
    }
}
