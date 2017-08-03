//import feedback from "./feedback";
import analytics from './analytics';
import consent from './consent';
import loadCSS from './loadCSS';
import polyfills from './polyfills';
import sentry from "./sentry";


export default function configure(history, store) {
  analytics(history);
  //sentry();
  polyfills;
  return Promise.all([
    loadCSS(),
    consent()
  ]);
  //store.subscribe(feedback(store));
  // loadCSS();
  // analytics(history);
  // consent();
  // sentry().then(() => console.log("WEEEEE "));
  // quantcast();
}