import ReactGA from 'react-ga';
ReactGA.initialize('UA-96949345-1');

function recordLoadTime() {
    // Feature detects Navigation Timing API support.
    if (window.performance) {
        // Gets the number of milliseconds since page load
        // (and rounds the result since the value must be an integer).
        var timeSincePageLoad = Math.round(performance.now());

        // Sends the timing hit to Google Analytics.
        window.ga('send', 'timing', 'JS Dependencies', 'load', timeSincePageLoad);
    }
}

export default function configure(history) {
    history.listen(function (location) { window.ga('send', 'pageview', location.pathname) });
    document.addEventListener('DOMContentLoaded', recordLoadTime);
};