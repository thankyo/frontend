export function loadScriptAsPromise(src) {
  return new Promise((resolve, reject) => {
    let a = document.createElement('script'), m = document.getElementsByTagName('script')[0];
    a.async = 1;
    a.src = src;
    a.onload = resolve;
    a.onerror = reject;
    m.parentNode.insertBefore(a, m);
  })
}

export function loadGA() {
  if (window.ga !== undefined) {
    return Promise.resolve();
  }

  let gaStr = 'ga';
  window['GoogleAnalyticsObject'] = gaStr;
  window[gaStr] = window[gaStr] || function () {
    (window[gaStr].q = window[gaStr].q || []).push(arguments)
  }, window[gaStr].l = 1 * new Date();

  return loadScriptAsPromise("https://www.google-analytics.com/analytics.js");
}

export function loadOptimize(callback) {
  let loadOptimize = function (a, s, y, n, c, h, i, d, e) {
    s.className += ' ' + y;
    h.start = 1 * new Date;
    h.end = i = function () {
      s.className = s.className.replace(RegExp(' ?' + y), '')
    };
    (a[n] = a[n] || []).hide = h;
    setTimeout(function () {
      i();
      h.end = null
    }, c);
    h.timeout = c;
  };

  loadOptimize(window, document.documentElement, 'async-hide', 'dataLayer', 4000, { 'GTM-NMWM54N': true });
}