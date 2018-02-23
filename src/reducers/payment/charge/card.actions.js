import authService from "../../util/auth";
import { loadScriptAsPromise } from '../../../conf/loadScript';
import { dispatchPromise, event } from '../../util/promiseStates';

export const CHARGE_CARD_GET = event("CHARGE_CARD_GET");
export const CHARGE_CARD_SET = event("CHARGE_CARD_SET");
export const CHARGE_CARD_DELETE = event("CHARGE_CARD_DELETE");

function processToken(token) {
  return (dispatch) => {
    let p = authService.post("/api/v1/payment/my/charge/account", token.id);
    return dispatchPromise(p, CHARGE_CARD_SET, dispatch);
  }
}

export function getChargeAccount() {
  return (dispatch) => {
    let p = authService.get("/api/v1/payment/my/charge/account");
    return dispatchPromise(p, CHARGE_CARD_GET, dispatch);
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
    let p = authService.remove("/api/v1/payment/my/charge/account");
    return dispatchPromise(p, CHARGE_CARD_DELETE, dispatch);
  }
}
