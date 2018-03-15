import polyfills from './polyfills';
import consent from './consent';


export default function configure(history, store) {
  polyfills();
  // analytics(history);
  consent();
  return Promise.resolve();
}