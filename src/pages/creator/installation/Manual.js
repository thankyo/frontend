import React, { Component } from "react";
import { CopyToClipboard } from 'react-copy-to-clipboard';

let iFrameText = "<iframe src='https://loveit.tips/integration' width='80' height='80' frameBorder='0' style='position: fixed; right: 10px; bottom: 10px'></iframe>";

export default class Manual extends Component {
  constructor(props) {
    super(props);

    this.state = { copied: false };
  }

  markCopied = () => {
    this.setState({ copied: true });
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => this.setState({ copied: false }), 1000)
  };

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  render() {
    let { url } = this.props;

    return (
      <section className="section">
        <h1 className="title">Ready for installation</h1>
        <h2 className="subtitle">This is the code for {url}. Copy & paste the following before the
          closing {"</head>"} tag
          of every page. This is a one time setup.</h2>

        <figure className="highlight">
        <pre>
          <code className="language-html" data-lang="html">
            <span className="nt">{"<iframe"}</span><br/>
            <span className="na">    src=</span><span className="s">"https://loveit.tips/integration"</span><br/>
            <span className="na">    width=</span><span className="s">"80"</span><br/>
            <span className="na">    height=</span><span className="s">"80"</span><br/>
            <span className="na">    frameBorder=</span><span className="s">"0"</span><br/>
            <span className="na">    style=</span><span
            className="s">"position: fixed; right: 10px; bottom: 10px"</span>
            <span className="nt">{">"}</span><br/>
            <span className="nt">{"</iframe>"}</span><br/>
          </code>
        </pre>
          <CopyToClipboard
            onCopy={this.markCopied}
            text={iFrameText}>
            <button className="button is-small bd-copy">{this.state.copied ? "Copied" : "Copy"}</button>
          </CopyToClipboard>
        </figure>
      </section>
    );
  }
}