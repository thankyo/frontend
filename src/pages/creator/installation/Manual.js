import React from "react";

export default function Manual({ url }) {
  return (
    <section className="section">
      <h1 className="title">Ready for installation</h1>
      <h2 className="subtitle">This is the code for {url}. Copy & paste the following before the closing {"</head>"} tag of every page. This is a one time setup.</h2>

      <div className="content">
        <code>
          {`<script type="text/javascript" data-cfasync="false" src="//dsms0mj1bbhn4.cloudfront.net/assets/pub/shareaholic.js" data-shr-siteid="3f7416970cc5e4b0d5ce917f702e0ca6" async="async"></script>`}
        </code>
      </div>
    </section>
  );
};