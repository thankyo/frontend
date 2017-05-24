import { loadGA } from './loadScript';

function recordLoadTime() {
    // Feature detects Navigation Timing API support.
    if (performance) {
        // Gets the number of milliseconds since page load
        // (and rounds the result since the value must be an integer).
        var timeSincePageLoad = Math.round(performance.now());

        // Sends the timing hit to Google Analytics.
        ga('send', 'timing', 'JS Dependencies', 'load', timeSincePageLoad);
    } else {
        console.error("Performance disabled");
    }
}

function doConfigure(history) {
    return () => {
        history.listen(function (location) {
            ga('send', 'pageview', location.pathname)
        });
        recordLoadTime();
    }
}

export default function configure(history) {
    if(ga === undefined) {
        loadGA(doConfigure(history));
    } else {
        doConfigure(history)();
    }
};