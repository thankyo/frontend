import React from "react";
import { Link } from "react-router-dom";

export default function Project({ project = {}, to, isActive = false}) {
  let { avatar, title, description } = project;
  return (
    <article className={`media media-new-style ${isActive && "is-active"}`}>
      <div className="media-left">
        <Link to={to}>
          <figure className="image">
            <img src={avatar || "http://via.placeholder.com/50x50"} alt="user picture"/>
          </figure>
        </Link>
      </div>
      <div className="media-content is-active">
        <div className="content is-inverted is-outlined">
          <Link to={to}>
            <strong>{title}</strong>
            <p className="subtitle">{description}</p>
          </Link>
        </div>
      </div>
    </article>
  );
}
