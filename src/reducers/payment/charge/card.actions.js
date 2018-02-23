import { loadScriptAsPromise } from 'conf/loadScript';

import { event } from 'reducers/util/promiseStates';

export const CHARGE_CARD_GET = event("CHARGE_CARD_GET");
export const CHARGE_CARD_UPDATE = event("CHARGE_CARD_UPDATE");
export const CHARGE_CARD_DELETE = event("CHARGE_CARD_DELETE");

export const getChargeAccount = CHARGE_CARD_GET.getMy("/api/v1/payment/$id/charge/account");

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
      return CHARGE_CARD_UPDATE.postMy("/api/v1/payment/$id/charge/account")(token.id)(dispatch);
    });
  }
}

export const deleteCard = CHARGE_CARD_DELETE.removeMy("/api/v1/payment/$id/charge/account");
