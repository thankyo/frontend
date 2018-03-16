import { loadGA } from './loadScript';

function recordLoadTime() {
  // Feature detects Navigation Timing API support.
  if (performance) {
    // Gets the number of milliseconds since page load
    // (and rounds the result since the value must be an integer).
    let timeSincePageLoad = Math.round(performance.now());

    // Sends the timing hit to Google Analytics.
    ga('send', 'timing', 'JS Dependencies', 'load', timeSincePageLoad);
  }
}

export default function configure() {
  return loadGA().then(() => {
    ga('create', 'UA-96949345-1', 'auto');
    recordLoadTime();
    return ga;
  }).catch((err) => {
    console.error(`Failed to load analytics ${err}`)
  });
};