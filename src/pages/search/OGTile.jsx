import React from "react";

export default function OGTile({ ogObj: { title = "unknown", description = "missing", type = "unknown", image: { url = "" } = {}}, tags, children }) {
  let style = {
    width: 320,
    height: 320,
    overflow: "hidden"
  };
  return (
    <div>
      <figure className="image" style={style}>
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