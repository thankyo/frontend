import { loadScriptAsPromise } from 'conf/loadScript';

import { dispatchPromise, event } from 'reducers/util/promiseStates';
import authService from "reducers/util/auth";

export const GET_CHARGE_CARD = event("GET_CHARGE_CARD");
export const UPDATE_CHARGE_CARD = event("UPDATE_CHARGE_CARD");
export const DELETE_CHARGE_CARD = event("DELETE_CHARGE_CARD");

export const getChargeAccount = GET_CHARGE_CARD.getMy("/api/v1/payment/$id/charge/account");

export function connectChargeAccount() {
  return (dispatch) => {
    return loadScriptAsPromise("https://checkout.stripe.com/checkout.js").
    then(() => new Promise((resolve, reject) => {
      let key = STRIPE_KEY;
      let conf = {
        key,
        locale: 'auto',
        name: "Love It",
        image: "/favicon.png",
        description: "Support creators with a single click",
        closed: () => reject(),
        token: (token) => resolve(token)
      };
      StripeButton.open(conf);
    })).
    then((token) => {
      let p = authService.post("/api/v1/payment/my/charge/account", token.id);
      return dispatchPromise(p, UPDATE_CHARGE_CARD, dispatch);
    });
  }
}

export function deleteCard() {
  return (dispatch) => {
    let p = authService.remove("/api/v1/payment/my/charge/account");
    return dispatchPromise(p, DELETE_CHARGE_CARD, dispatch);
  }
}
