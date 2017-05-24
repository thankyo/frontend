import { loadQuantcast } from "./loadScript";

export default function configure() {
    window._qevents = window._qevents || [];
    _qevents.push({
        qacct:"p-7vP8g9XSPrnMP"
    });

    loadQuantcast(() => console.log("Loaded Quantcast"));
}
