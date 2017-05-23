import loadScript from './loadScript';

function doConfigure(history) {
    return () => {
        window.Intercom("boot", {
            app_id: "x5owufet"
        });
        history.listen(function () {
            window.Intercom("update");
        });
    }
}

export default function configure(history) {
    loadScript("https://widget.intercom.io/widget/x5owufet", "Intercom", "Intercom", doConfigure(history))
};