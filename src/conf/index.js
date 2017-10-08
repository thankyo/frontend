import polyfills from './polyfills';
import consent from './consent';
import loadCSS from './loadCSS';
import offline from "./offline";


export default function configure(history, store) {
  offline();
  polyfills();
  // analytics(history);
  consent();
  return Promise.all([
    loadCSS(),
  ]);
}