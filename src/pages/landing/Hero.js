import React from "react";
import Brand from "../components/Brand";
import FacebookLogin from "./FacebookLogin";

export default function () {
  return (
    <section className="hero is-medium is-fullheight page-promo">
      <div className="hero-head">
        <header className="nav main-nav">
          <div className="container">
            <div className="nav-left">
              <a className="nav-item">
                <Brand/>
              </a>
            </div>
            <FacebookLogin>
              <div className="nav-right nav-menu">
                <a className="nav-item">
                  Login
                </a>
                <a className="nav-item nav-item-btn button button-white-border">
                  Sign Up
                </a>
              </div>
            </FacebookLogin>
          </div>
        </header>
      </div>
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title title-main-promo title-main-promo-left">
            Support creators with a single click
          </h1>
          <FacebookLogin>
            <a href="#" className="button button-join">Join</a>
          </FacebookLogin>
        </div>
      </div>
    </section>
  );
}