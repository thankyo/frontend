//import feedback from "./feedback";
import analytics from './analytics';
import consent from './consent';
import loadCSS from './loadCSS';
import polyfills from './polyfills';


export default function configure(history, store) {
  polyfills;
  analytics(history);
  consent();
  return Promise.all([
    loadCSS(),
  ]);
}