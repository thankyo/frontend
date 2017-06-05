import React, {Component} from "react";

class Example extends Component {
    render() {
        let src = `/api/v1/thank/http/${window.location.host}/${window.location.pathname}`;
        let style = {
            borderWidth: 0
        };
        return(
            <iframe src={src} title="LoveIt" height={20} width={110} style={style}></iframe>
        )
    }
}

let jsText  = `
<!-- LoveIt Script -->
<script>(function(i) {
    var f, s = document.getElementById(i);
    f = document.createElement('iframe');
    f.src = "//loveit.tips/api/v1/thank/http/" + window.location.host + "/" + window.location.pathname;
    f.title = 'LoveIt';
    f.height = 20;
    f.width = 110;
    f.style.borderWidth = 0;
    s.parentNode.insertBefore(f, s);
})('love-it')
</script>
`;

let buttonHtml = `
<div id="love-it"></div>
`;


export default class JSIntegration extends Component {
    render() {
        return (
            <div className="content">
                <h5 className="title is-5">1. Embed following JS script on your page.</h5>
                <div className="content">
                    <pre>
                        <code>
                            {jsText}
                        </code>
                    </pre>
                </div>
                <h5 className="title is-5">2. Place button tag where you want the plugin to appear on your page.</h5>
                <div className="content">
                <pre>
                    <code>
                        {buttonHtml}
                    </code>
                </pre>
                </div>
                <h5 className="title is-5">When everything is right, it looks like this</h5>
                <Example/>
            </div>
        );
    }
}
