import { loadScriptAsPromise } from "./loadScript";

export default function configure() {
    window._qevents = window._qevents || [];
    _qevents.push({
        qacct:"p-7vP8g9XSPrnMP"
    });

    let src = (document.location.protocol == "https:" ? "https://secure" : "http://edge") + ".quantserve.com/quant.js";
    return loadScriptAsPromise(src);
}
