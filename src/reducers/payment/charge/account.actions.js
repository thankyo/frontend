import authService from "../../util/auth";
import { loadScriptAsPromise } from '../../../conf/loadScript';
import { dispatchPromise } from '../../util/promiseStates';

export const CHARGE_ACCOUNT_GET = "CHARGE_ACCOUNT_GET";
export const CHARGE_ACCOUNT_SET = "CHARGE_ACCOUNT_SET";
export const CHARGE_ACCOUNT_DELETE = "CHARGE_ACCOUNT_DELETE";

function processToken(token) {
  return (dispatch) => {
    let req = new Request(
      "/api/v1/payment/my/account",
      {
        method: "POST",
        body: JSON.stringify(token.id)
      });
    let p = authService.signAndFetch(req);
    return dispatchPromise(p, CHARGE_ACCOUNT_SET, dispatch);
  }
}

export function getChargeAccount() {
  return (dispatch) => {
    let req = new Request("/api/v1/payment/my/account");
    let p = authService.signAndFetch(req);
    return dispatchPromise(p, CHARGE_ACCOUNT_GET, dispatch);
  }
}

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
    then((token) => dispatch(processToken(token)));
  }
}

export function deleteCard() {
  return (dispatch) => {
    let req = new Request("/api/v1/payment/my/account", { method: "DELETE" });
    let p = authService.signAndFetch(req);
    return dispatchPromise(p, CHARGE_ACCOUNT_DELETE, dispatch);
  }
}
