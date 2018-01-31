import React from "react";

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
          {tags.map((tag, i) => <span key={i} className="tag is-primary">{tag}</span>)}
        </div>
        <br/>
        {children}
      </div>
    </div>
  )
}