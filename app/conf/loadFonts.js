// Does not work with fallback to local

function loadAmatic(document, url) {
    return new Promise(function (resolve, reject) {
        document.createElement("script");
        let font = document.createElement('style');
        font.type = 'text/css';
        font.innerHTML = `@font-face {
        font-family: 'Amatic SC';
        font-style: normal;
        font-weight: 400;
            src: local('Amatic SC Regular'), local('AmaticSC-Regular'), ${url} format('woff2');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215;
        }`;
        font.onload = resolve;
        font.error = reject;
        document.getElementsByTagName('head')[0].appendChild(font);
    });
}

export default function configure(){
    if (location.host.startsWith('localhost')) {
        return loadAmatic(document, "url(/fonts/AmaticSC-Regular.woff2)");
    } else {
        return loadAmatic(document, "url(https://fonts.gstatic.com/s/amaticsc/v9/DPPfSFKxRTXvae2bKDzp5JBw1xU1rKptJj_0jans920.woff2)");
    }
}