import React, {Component} from "react";
import Icon from "../components/Icon";

const height = 48;
const width = 110;
const title = "LoveIt";

class Example extends Component {
    render() {
        let src = `/api/v1/thank/http/example.com/verified`;
        let style = {
            borderWidth: 0
        };
        let unverifiedSrc = `/api/v1/thank/http/example.com/unverified`;
        return(
            <div className="columns">
                <div className="column is-one-third">
                    <span className="title is-error">Something wrong</span><br/>
                    <iframe src={unverifiedSrc} title={title} height={height} width={width} style={style}></iframe>
                </div>
                <div className="column is-one-third">
                    <span className="title is-success">Everything is right</span><br/>
                    <iframe src={src} title={title} height={height} width={width} style={style}></iframe>
                </div>
            </div>
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
                <h5 className="title is-5">2. Place button tag where you want it.</h5>
                <div className="content">
                <pre>
                    <code>
                        {buttonHtml}
                    </code>
                </pre>
                </div>
                <br/>
                <br/>
                <h5 className="title is-5">Example</h5>
                <Example/>
            </div>
        );
    }
}
