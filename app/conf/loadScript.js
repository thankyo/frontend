export function loadScript(src, callback) {
    let a = document.createElement('script'), m = document.getElementsByTagName('script')[0];
    a.async = 1;
    a.src = src;
    a.onload = callback;
    m.parentNode.insertBefore(a, m);
}

export function loadGA(callback) {
    let load = function(i,s,o,g,r,a,m,cb){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;a.onload = cb;m.parentNode.insertBefore(a,m);
    };

    load(window,document,'script','https://www.google-analytics.com/analytics.js','ga',callback)
}

export function loadQuantcast(callback) {
    var elem = document.createElement('script');
    elem.src = (document.location.protocol == "https:" ? "https://secure" : "http://edge") + ".quantserve.com/quant.js";
    elem.async = true;
    elem.type = "text/javascript";
    elem.onload = callback;
    var scpt = document.getElementsByTagName('script')[0];
    scpt.parentNode.insertBefore(elem, scpt);
}