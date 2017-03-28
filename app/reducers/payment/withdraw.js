import { WITHDRAW_REQUESTED, WITHDRAW_SUCCESS, WITHDRAW_ERROR } from './withdraw.actions';

const initialState = {
    isLoading: false,
    isError: false,
    amount: 0
};

export default function(withdraw = initialState, { type, payload}) {
    switch (type) {
        case WITHDRAW_REQUESTED:
            return Object.assign({}, withdraw, { isLoading: true, amount: payload.amount});
        case WITHDRAW_SUCCESS:
            return Object.assign({}, withdraw, initialState);
        case WITHDRAW_ERROR:
            return Object.assign({}, withdraw, { isLoading: false, isError: true, error: payload.error });
        default:
            return withdraw
    }
}