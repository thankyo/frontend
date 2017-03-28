import authService from "../../service/auth";
import client from "braintree-web/client";
import paypal from "braintree-web/paypal";

export const BRAINTREE_TOKEN_REQUESTED = "BRAINTREE_TOKEN_REQUESTED";
export const BRAINTREE_TOKEN_SUCCESS = "BRAINTREE_TOKEN_SUCCESS";
export const BRAINTREE_TOKEN_ERROR = "BRAINTREE_TOKEN_ERROR";

export const BRAINTREE_PROCESSING_START = "BRAINTREE_PROCESSING_START";
export const BRAINTREE_PROCESSING_SUCCESS = "BRAINTREE_PROCESSING_SUCCESS";
export const BRAINTREE_PROCESSING_ERROR = "BRAINTREE_PROCESSING_ERROR";

function tokenRequested() {
    return {
        type: BRAINTREE_TOKEN_REQUESTED
    }
}

function tokenSuccess(token) {
    return {
        type: BRAINTREE_TOKEN_SUCCESS,
        payload: {token}
    }
}

function tokenError(error) {
    return {
        type: BRAINTREE_TOKEN_ERROR,
        payload: {
            error
        }
    }
}

function braintreeProcessingStart() {
    return {
        type: BRAINTREE_PROCESSING_START
    }
}

function braintreeProcessingSuccess(nonce) {
    return {
        type: BRAINTREE_PROCESSING_SUCCESS,
        payload: {nonce}
    }
}

function braintreeError(error) {
    return {
        type: BRAINTREE_PROCESSING_ERROR,
        payload: {
            error
        }
    }
}

function fetchToken(dispatch) {
    dispatch(tokenRequested());
    let fToken = authService.
        signAndFetch(new Request("/api/v1/payment/braintree/token"), dispatch)
    fToken.then((token) => dispatch(tokenSuccess(token)))
    return fToken;
}

export function braintreeProcess() {
    return (dispatch) => {
        fetchToken(dispatch).
            then((authorization) => {

                client.create({authorization}, (err, client) => {
                    paypal.create({client}, (paypalErr, paypalInstance) => {
                        dispatch(braintreeProcessingStart());
                        paypalInstance.tokenize({
                            flow: 'checkout', // Required
                            amount: 10.00, // Required
                            currency: 'USD', // Required
                            locale: 'en_US',
                            enableShippingAddress: false,
                            shippingAddressEditable: false
                        }, (err, nonce) => {
                            if (Object.isObject(err)) {
                                dispatch(braintreeError(err));
                            } else {
                                dispatch(braintreeProcessingSuccess(nonce));
                                let req = new Request(
                                    "/api/v1/payment/braintree/nonce",
                                    {
                                        method: "POST",
                                        headers: {
                                            'Accept': 'application/json',
                                            'Content-Type': 'application/json'
                                        },
                                        body: JSON.stringify(nonce)
                                    });
                                authService.signAndFetch(req, dispatch)
                            }
                        });
                    });
            });
        });
    }
}