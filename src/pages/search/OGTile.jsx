import React from "react";

function LoveItOGView({ title = "unknown", description = "missing", type = "unknown", image: { url = "" } = {}, tags }) {
  let style = {
    width: 320,
    height: 320,
    overflow: "hidden"
  };
  return (
    <article>
      <figure className="image" style={style}>
        <img src={url}/>
      </figure>
      <p className="title">{title}</p>
      <p className="subtitle">{type}</p>
      <div className="content">
        {description}
        <div className="tags">
          {tags.map((tag, i) => <span key={i} className="tag is-primary">{tag}</span>)}
        </div>
      </div>
    </article>
  )
}

export default function LoveItInfo(props) {
  let { ogObj, tags } = props;
  return (
    <LoveItOGView {...ogObj} tags={tags}/>
  );
}