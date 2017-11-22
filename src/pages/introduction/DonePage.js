import React from "react";
import { Link } from "react-router-dom";

export default function DonePage({ match: { path }, history }) {
  setTimeout(() => {
    if (path === location.pathname) {
      history.push("/dashboard/my")
    }
  }, 2000);
  return (
    <div>
      <h1 className="title">All done</h1>
      <h1 className="subtitle">Love to have you here.</h1>
      <h6 className="subtitle is-6">
        If not redirected in few seconds press <b><Link to={"/dashboard/my"} className="link">here</Link></b>.
      </h6>
    </div>
  )
}