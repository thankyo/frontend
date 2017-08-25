export function loadCSS(remote, local, integrity) {
  function fillElement(href, onLoad, onError) {
    let css = document.createElement('link');
    css.rel = "stylesheet";
    css.type = "text/css";
    css.async = 1;
    css.href = href;
    css.onload = onLoad;
    css.onerror = onError;
    css.integrity = href.startsWith("http") ? integrity : undefined;
    css.crossOrigin = "anonymous";
    return css;
  }

  function insert(elem) {
    let scpt = document.getElementsByTagName('script')[0];
    scpt.parentNode.insertBefore(elem, scpt);
  }

  function loadCSS(url, onLoad, onError) {
    let css = fillElement(url, onLoad, onError);
    insert(css);
  }

  return new Promise((resolve, reject) => {
    if (location.hostname === 'localhost') {
      loadCSS(local, resolve, reject, local);
    } else {
      loadCSS(remote, resolve, function () {
        loadCSS(resolve, reject, local);
      });
    }
  });
}

function configure() {
  let loadFontAwesome = loadCSS(
    "https://cdn.jsdelivr.net/fontawesome/4.7.0/css/font-awesome.min.css",
    "/css/font-awesome.css",
    "sha256-eZrrJcwDc/3uDhsdt61sL2oOBY362qM3lon1gyExkL0="
  );

  let loadBulma = loadCSS(
    "https://cdn.jsdelivr.net/npm/bulma@0.5.0/css/bulma.css",
    '/css/bulma.css'
  );

  return Promise.all([ loadFontAwesome, loadBulma ]);
}

export default configure;