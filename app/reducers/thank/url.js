import { THANK_REQUESTED, THANK_SUCCESS, THANK_FAILED } from './url.actions';

const initialState = {
    isLoading: false,
    isError: false,
    url: ""
};

export default function(thank = initialState, { type, payload}) {
    switch (type) {
        case THANK_REQUESTED:
            return Object.assign({}, thank, { isLoading: true, url: payload.url});
        case THANK_SUCCESS:
            return Object.assign({}, thank, initialState);
        case THANK_FAILED:
            return Object.assign({}, thank, { isLoading: false, isError: true, error: payload.error });
        default:
            return thank
    }
}