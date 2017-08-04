//import feedback from "./feedback";
import polyfills from './polyfills';
import analytics from './analytics';
import consent from './consent';
import loadCSS from './loadCSS';


export default function configure(history, store) {
  polyfills;
  analytics(history);
  consent();
  return Promise.all([
    loadCSS(),
  ]);
}