import { loadScriptAsPromise } from "./loadScript";

function loadSentry(callback) {
  let elem = document.createElement('script');
  elem.src = "https://cdn.ravenjs.com/3.17.0/raven.min.js";
  elem.async = true;
  elem.type = "text/javascript";
  elem.onload = callback;
  let scpt = document.getElementsByTagName('script')[0];
  scpt.parentNode.insertBefore(elem, scpt);
}


export default function () {
  return loadScriptAsPromise("https://cdn.ravenjs.com/3.17.0/raven.min.js").then(() => {
    let install = Raven.config('https://9135be526dd647ab9aaff18d0871fc82@sentry.io/197694').install()
    return install;
  });
};