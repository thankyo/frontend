function recordLoadTime() {
    // Feature detects Navigation Timing API support.
    if (performance) {
        // Gets the number of milliseconds since page load
        // (and rounds the result since the value must be an integer).
        var timeSincePageLoad = Math.round(performance.now());

        // Sends the timing hit to Google Analytics.
        ga('send', 'timing', 'JS Dependencies', 'load', timeSincePageLoad);
    }
}

function doConfigure(history, attempt) {
    let gaLoaded = window.ga !== undefined  && ga.create !== undefined;
    if (gaLoaded) {
        ga('create', 'UA-96949345-1', 'auto');
        history.listen(function (location) {
            ga('send', 'pageview', location.pathname)
        });
        document.addEventListener('DOMContentLoaded', recordLoadTime);
    } else if (attempt < 5) {
        setTimeout(() =>  { doConfigure(history, attempt + 1) }, 10000);
    }
}

export default function configure(history) {
    console.log("Starting analytics");
    if (location.hostname === "localhost") {
        console.log("Analytics disabled")
    } else {
        doConfigure(history, 0)
   }
};