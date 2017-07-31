class CSSConfiguration {
    constructor(remote, local, integrity) {
        this.remote = remote;
        this.local = local;
        this.integrity = integrity;

        this.load = this.load.bind(this);
    }
    load(document) {
        const fillElement = (document, href) => {
            let css = document.createElement('link');
            css.rel = "stylesheet";
            css.type = "text/css";
            css.async = 1;
            css.href = href;
            css.integrity = this.integrity;
            css.crossOrigin = "anonymous";
            return css;
        };

        const insert = (document, elem) => {
            let scpt = document.getElementsByTagName('script')[0];
            scpt.parentNode.insertBefore(elem, scpt);
        };

        const loadRemote = (document, onload, onerror) => {
            let css = fillElement(document, this.remote);
            css.onload = onload;
            css.onerror = () => { loadLocal(document, onload, onerror) };
            insert(document, css);
        };

        const loadLocal = (document, onload, onerror) => {
            let css = fillElement(document, this.local);
            css.integrity = undefined;
            css.onload = onload;
            css.onerror = onerror;
            insert(document, css);
        };

        return new Promise((resolve, reject) => {
          if (location.host.startsWith('localhost')) {
            loadLocal(document, resolve, reject);
          } else {
            loadRemote(document, resolve, reject);
          }
        });
    }
}

export function loadCSS(remote, local) {
    return new CSSConfiguration(
        remote,
        local
    ).load(document);
}


export default function configure(){
    const CSS_CONFIGURATIONS = [
        new CSSConfiguration(
            "https://cdn.jsdelivr.net/fontawesome/4.7.0/css/font-awesome.min.css",
            "/css/font-awesome.css",
            "sha256-eZrrJcwDc/3uDhsdt61sL2oOBY362qM3lon1gyExkL0="
        ),
        new CSSConfiguration(
            "https://cdn.jsdelivr.net/npm/bulma@0.5.0/css/bulma.css",
            '/css/bulma.css'
        )
    ];

    return Promise.all(CSS_CONFIGURATIONS.map((conf) => conf.load(document)));
}