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

        const loadRemote = (document) => {
            let css = fillElement(document, this.remote);
            css.onerror = () => { loadLocal(document) }
            insert(document, css);
        };

        const loadLocal = (document) => {
            let css = fillElement(document, this.local);
            css.integrity = undefined;
            css.onerror = () => { console.error("WTF"); };
            insert(document, css);
        };

        if (location.host.startsWith('localhost')) {
            loadLocal(document);
        } else {
            loadRemote(document);
        }
    }
}

export function loadCSS(remote, local) {
    new CSSConfiguration(
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
            "https://cdn.jsdelivr.net/bulma/0.4.1/css/bulma.css",
            '/css/bulma.css',
            "sha256-PELQzdZwUQw2WSX3q4QLMSzDqQyWrmrXODp2bZy6JOU="
        )
    ];

    CSS_CONFIGURATIONS.forEach((conf) => conf.load(document));
}