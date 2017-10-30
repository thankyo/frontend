import React from "react";

function Card({ image, children }) {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={image} alt="Placeholder image"/>
        </figure>
      </div>
      <div className="card-content">
        {children}
      </div>
    </div>
  )
}

export default function About() {
  return (
    <div className="columns">
      <div className="column is-one-third">
        <Card image="/img/about_1.jpg">
          <h2>
            <b>Creators put Loveit button on every&nbsp;piece&nbsp;they&nbsp;create</b>
          </h2>
          <br/>
          <p>It can be a song, poem, photo, blog, basically anything on the web can have this button</p>
          <br/>
        </Card>
      </div>
      <div className="column is-one-third">
        <Card image="/img/about_2.jpg">
          <h2>
            <b>Whenever you click it, <br/>we register&nbsp;your&nbsp;tip</b>
          </h2>
          <br/>
          <p>We track your support throughout the month and charge you total at the end of it</p>
          <br/>
        </Card>
      </div>
      <div className="column is-one-third">
        <Card image="/img/about_3.jpg">
          <h2>
            <b>At the end of the month <br/>we combine your tips</b>
          </h2>
          <br/>
          <p>You are in full control of how much you spend - set your own limits and we won't charge you more, than that</p>
        </Card>
      </div>
    </div>
  )
}