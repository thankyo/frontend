import { BRAINTREE_TOKEN_REQUESTED, BRAINTREE_TOKEN_SUCCESS, BRAINTREE_TOKEN_ERROR, BRAINTREE_PROCESSING_ERROR, BRAINTREE_PROCESSING_SUCCESS } from './braintree.actions';

const initialState = {
    isLoading: false,
    isError: false,
    token: null
};

export default function(braintree = initialState, { type, payload}) {
    switch (type) {
        case BRAINTREE_TOKEN_REQUESTED:
            return Object.assign({}, braintree, { isLoading: true, isError: false, token: ""});
        case BRAINTREE_TOKEN_SUCCESS:
            return Object.assign({}, braintree, initialState, { token: payload.token });
        case BRAINTREE_TOKEN_ERROR:
            return Object.assign({}, braintree, { isLoading: false, isError: true, error: payload.error });
        case BRAINTREE_PROCESSING_ERROR:
            return Object.assign({}, braintree, { isLoading: false, isError: true, error: payload.error });
        case BRAINTREE_PROCESSING_SUCCESS:
            return Object.assign({}, braintree, { isLoading: false, isError: false, nonce: payload.nonce });
        default:
            return braintree
    }
}