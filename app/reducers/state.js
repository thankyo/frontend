export const REQUESTED  = "REQUESTED";
export const FAILED     = "FAILED";
export const SUCCESS    = "SUCCESS";

export function requested(type, payload) {
    return { type, state: REQUESTED, payload };
}

export function failed(type, payload) {
    return {type, state: FAILED, payload };
}

export function success(type, payload) {
    return { type, state: SUCCESS, payload };
}