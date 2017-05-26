function isDesktop() {
    return true;
}

function isTablet() {
    return false;
}

function isMobile() {
    return false;
}
export default function(desktop, tablet, mobile) {
    if (isDesktop()) return desktop();
    if (isTablet()) return tablet();
    if (isMobile()) return mobile();
}