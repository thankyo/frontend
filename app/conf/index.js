//import feedback from "./feedback";
import analytics from './analytics';
import consent from './consent';
import loadCSS from './loadCSS';
import polyfills from './polyfills';


export default function configure(history, store) {
  polyfills;
  analytics(history);
  consent();
  //sentry();
  return Promise.all([
    loadCSS(),
  ]);
  //store.subscribe(feedback(store));
  // loadCSS();
  // analytics(history);
  // consent();
  // sentry().then(() => console.log("WEEEEE "));
  // quantcast();
}