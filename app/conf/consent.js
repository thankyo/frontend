import { loadScript } from './loadScript';
import { loadCSS } from './loadCSS';

function doConfigure() {
    window.cookieconsent.initialise({
        "palette": {
            "popup": {
                "background": "#eaf7f7",
                "text": "#5c7291"
            },
            "button": {
                "background": "#56cbdb",
                "text": "#ffffff"
            }
        },
        "theme": "edgeless"
    })

}

export default function configure() {
    if (document.cookie.indexOf("cookieconsent_status=dismiss") === -1) {
        loadScript("//cdn.jsdelivr.net/cookieconsent3/3.0.4/cookieconsent.min.js", doConfigure);
        loadCSS("//cdn.jsdelivr.net/cookieconsent3/3.0.4/cookieconsent.min.css", "/css/cookieconsent.min.css");
    }
}