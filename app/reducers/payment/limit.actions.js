import authService from 'service/auth';

export const SET_LIMIT = "SET_LIMIT";

const toEvent = (type, payload) => { type, payload };
const dispatchPromise = (p, event, dispatch) => {
    dispatch(toEvent(`${event}.pending`, {}));
    p.
        then((res) => dispatch(toEvent(`${event}.fulfilled`, res))).
        catch((err) => dispatch(toEvent(`${event}.rejected`, err)))
}

export default function setLimit(limit) {
    return (dispatch) => {
        let req = new Request();
        new Request(
            "/api/v1/payment/limit/month/my",
            {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(limit)
            });
        let p = authService.signAndFetch(req, dispatch);
        dispatchPromise(p, SET_LIMIT, dispatch)
    }
}