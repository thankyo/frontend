import React from "react";
import Icon from "../../../common/Icon";

export default function Card({ isMissing, brand, last4 }) {
  if (isMissing) {
    return (
      <div className="subtitle">
        Card Free since 93
      </div>
    )
  }
  return (
    <div className="subtitle">
      <Icon fa={`cc-${brand.toLowerCase()}`}/>&nbsp;
      Card ending in {last4}
    </div>
  )
}