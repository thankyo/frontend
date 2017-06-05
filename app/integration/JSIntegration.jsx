import React, {Component} from "react";

const height = 20;
const width = 110;
const title = "LoveIt";

class Example extends Component {
    render() {
        let src = `/api/v1/thank/http/${window.location.host}/${window.location.pathname}`;
        let style = {
            borderWidth: 0
        };
        return(
            <iframe src={src} title={title} height={height} width={width} style={style}></iframe>
        )
    }
}

let jsText  = `
<!-- JS LoveIt Script -->
<script>(function(d, i, l) {
    var f = d.createElement('iframe');
    f.src = "//loveit.tips/api/v1/thank/http/" + l.host + "/" + l.pathname;
    f.title = "${title}";
    f.height = ${height};
    f.width = ${width};
    f.style.borderWidth = 0;
    
    function initButton() {
        var s = d.getElementById(i);
        s.appendChild(f);
    };
    initButton = initButton.bind(this);
    
    if (d.readyState !== 'loading') {
        initButton();
    } else {
        d.addEventListener('DOMContentLoaded', initButton)
    }
})(document, 'love-it', window.location)
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
