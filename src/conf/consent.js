import { loadScriptAsPromise } from './loadScript';
import { loadCSS } from './loadCSS';

function doConfigure() {
  const config = {
    palette: {
      popup: {
        background: "#eaf7f7",
        text: "#5c7291"
      },
      button: {
        background: "#56cbdb",
        text: "#ffffff"
      }
    },
    theme: "edgeless"
  };
  window.cookieconsent.initialise(config)
}

export default function configure() {
  if (document.cookie.indexOf("cookieconsent_status=dismiss") === -1) {
    let loadConsentScript = loadScriptAsPromise("//cdn.jsdelivr.net/cookieconsent3/3.0.4/cookieconsent.min.js").then(doConfigure);
    let loadConsentCSS = loadCSS(
      "//cdn.jsdelivr.net/cookieconsent3/3.0.4/cookieconsent.min.css",
      "/css/cookieconsent.min.css"
    );
    return Promise.all([ loadConsentScript, loadConsentCSS ]);
  } else {
    return Promise.resolve()
  }
}