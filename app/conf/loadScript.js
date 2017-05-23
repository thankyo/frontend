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
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m);a.onload(cb)
    };

    load(window,document,'script','https://www.google-analytics.com/analytics.js','ga',callback)
}
