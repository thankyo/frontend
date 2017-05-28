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
        loadScript("//cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.0.3/cookieconsent.min.js", doConfigure);
        loadCSS("//cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.0.3/cookieconsent.min.css", "/css/cookieconsent.min.css");
    }
}