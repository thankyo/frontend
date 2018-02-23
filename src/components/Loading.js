import React from "react";

export function LoadingSVG({ width = 100, height = 100 }) {
  return (
    <div style={{ width, height }}>
      <Loading/>
    </div>
  )
}

export default function Loading() {
  return (
    <button className="button is-loading is-outlined is-primary is-inverted"></button>
  );
}