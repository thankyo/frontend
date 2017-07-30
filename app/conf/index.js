import feedback from "./feedback";
import analytics from './analytics';
import consent from './consent';
import quantcast from './quantcastConf';
import loadFonts from './loadFonts';
import loadCSS from './loadCSS';

export default function configure(history, store) {
    loadFonts();
    loadCSS();
    store.subscribe(feedback(store));
    analytics(history);
    // quantcast();
    consent();
}