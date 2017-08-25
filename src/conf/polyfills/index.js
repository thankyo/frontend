import assign from "./assign";
import promise from 'es6-promise';

export default function() {
  promise.polyfill();
  assign.polyfill();
}