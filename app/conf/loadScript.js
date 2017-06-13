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

    load(window,document,'script','https://www.google-analytics.com/analytics.js','ga',callback);
}

export function loadOptimize(callback) {
    let loadOptimize = function(a,s,y,n,c,h,i,d,e){s.className+=' '+y;h.start=1*new Date;
        h.end=i=function(){s.className=s.className.replace(RegExp(' ?'+y),'')};
        (a[n]=a[n]||[]).hide=h;setTimeout(function(){i();h.end=null},c);h.timeout=c;
    };

    loadOptimize(window,document.documentElement,'async-hide', 'dataLayer', 4000, {'GTM-NMWM54N':true});
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

export function loadStripe(callback) {
    var elem = document.createElement('script');
    elem.src = "https://checkout.stripe.com/checkout.js";
    elem.async = true;
    elem.type = "text/javascript";
    elem.onload = callback;
    var scpt = document.getElementsByTagName('script')[0];
    scpt.parentNode.insertBefore(elem, scpt);
}