import React, { Component } from "react";
import "./notVerified.scss";

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
    return (
      <div className="columns">
        <div className="column is-half">
          <span className="subtitle subtitle-mb is-6 is-error">Something wrong</span><br/>
          <span id="problem">Problem</span>
        </div>
        <div className="column is-half">
          <span className="subtitle subtitle-mb is-6 is-error">Everything is right</span><br/>
          <span id="normal">LoveIt</span>
        </div>
      </div>
    )
  }
}

let jsText = `<!-- JS LoveIt Script -->
<script>(function(d, i, l) {
  var f = d.createElement('iframe');
  f.src = "//loveit.tips/api/v1/thank/http/" +
    l.host + 
    "/" + l.pathname;
  f.title = "${title}";
  f.height = ${height};
  f.width = ${width};
  f.style.borderWidth = 0;
  
  function initButton() {
    var s = d.getElementById(i);
    s.appendChild(f);
  }
  initButton = initButton.bind(this);
  
  if (d.readyState !== 'loading') {
    initButton();
  } else {
    d.addEventListener('DOMContentLoaded', initButton)
  }
})(document, 'love-it', window.location)
</script>`;

let buttonHtml = `<div id="love-it"></div>`;


export default class JSIntegration extends Component {
  render() {
    return (
      <div>
        <h6 className="title is-6">Embed following JS script on your page.</h6>
        <pre>
            {jsText}
        </pre>
        <h6 className="title is-6">Place button tag where you want it.</h6>
        <pre>
            {buttonHtml}
        </pre>
        <h6 className="title is-6">Example</h6>
        <Example/>
      </div>
    );
  }
}
