import feedback from "./feedback";
import analytics from './analytics';
import consent from './consent';

export default function configure(history, store) {
    store.subscribe(feedback(store));
    analytics(history);
    consent();
}