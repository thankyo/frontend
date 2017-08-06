import React, { Component } from "react";
import Brand from "../components/Brand";
import FacebookLogin from "./FacebookLogin";

export default class Hero extends Component {
  render() {
    let style = {
      backgroundImage: `url('/images/landing/${this.props.image}')`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    };
    return (
      <section className="hero is-success is-fullheight" style={style}>
          <div className="hero-head">
              <header className="nav">
                  <div className="container">
                      <div className="nav-left">
                          <Brand/>
                      </div>
                  </div>
              </header>
          </div>
          <div className="hero-body">
              <div className="container has-text-centered">
                  <h1 className="title is-1">
                    {this.props.title}
                  </h1>
                  <h2 className="subtitle is-3">{this.props.subtitle}</h2>
                  <FacebookLogin>
                      <div className="button is-info is-inverted is-outlined is-hovered is-large">
                          <span>{this.props.button}</span>
                      </div>
                  </FacebookLogin>
              </div>
          </div>
      </section>
    );
  }
}