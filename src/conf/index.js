import polyfills from './polyfills';
import consent from './consent';
import analytics from "./analytics";

export default function configure() {
  polyfills();
  analytics();
  consent();
  return Promise.resolve();
}