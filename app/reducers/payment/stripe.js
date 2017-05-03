import { STRIPE_PROCESSING_ERROR, STRIPE_PROCESSING_SUCCESS, STRIPE_PROCESSING_START } from './stripe.actions';

const initialState = {
    token: {},
    processed: false,
    isLoading: false,
    isError: false
};

export default function(stripe = initialState, { type, payload}) {
    switch (type) {
        case STRIPE_PROCESSING_START:
            return Object.assign({}, stripe, { isLoading: true, isError: false, token: payload.token });
        case STRIPE_PROCESSING_ERROR:
            return Object.assign({}, stripe, { isLoading: false, isError: true, error: payload.error });
        case STRIPE_PROCESSING_SUCCESS:
            return Object.assign({}, stripe, { isLoading: false, isError: false, success: true });
        default:
            return stripe
    }
}