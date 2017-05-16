export default function (src, shortName, defaultName, callback) {
    window[defaultName] = shortName;
    window[shortName] = window[shortName] || function () {
            (window[shortName].q = window[shortName].q || []).push(arguments)
        }, window[shortName].l = 1 * new Date();
    let a = document.createElement('script'), m = document.getElementsByTagName('script')[0];
    a.async = 1;
    a.src = src;
    a.onload = callback;
    m.parentNode.insertBefore(a, m);
}
