import {VERIFICATION_LIST_SUCCESS, VERIFICATION_LIST_FAILED, VERIFICATION_LIST_REQUESTED} from "./verification.actions";

const initialState = {};

export default function (verification = initialState, { type, payload }) {
    switch (type) {
        case VERIFICATION_LIST_REQUESTED:
            let requested = {
                isError: false,
                items: []
            };
            return Object.assign({}, verification, { [payload.user]: requested });
        case VERIFICATION_LIST_FAILED:
            let error = {
                isLoading: false,
                isError: true,
                items: [],
                error: payload
            };
            return Object.assign({}, verification, { [payload.user]: error });
        case VERIFICATION_LIST_SUCCESS:
            let { user, items } = payload;
            let resources = Object.assign({}, verification[user], { items });
            return Object.assign({}, verification, { [user]: resources });
        default:
            return verification;
    }
}