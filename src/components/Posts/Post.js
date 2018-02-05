import React from "react";
import { Link } from "react-router-dom";

export default function OGTile({ ogObj: { title = "unknown", description = "missing", type = "unknown", image: { url = "" } = {}, tags = []}, children }) {
  return (
    <div>
      <figure className="image">
        <img src={url}/>
      </figure>
      <p className="title">{title}</p>
      <div className="content">
        <div>
          {description}
        </div>
        <div className="tags">
          {tags.map((tag, i) => <Link key={i} to={`/search?query=${tag}`} className="tag is-black">{tag}</Link>)}
        </div>
        <br/>
        {children}
      </div>
    </div>
  )
}