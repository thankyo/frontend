import React from "react";
import Icon from "../../../common/Icon";

export default function Card({ brand, last4 }) {
  return (
    <div>
      <div className="subtitle">
        <Icon fa={`cc-${brand.toLowerCase()}`}/>&nbsp;
        Card ending in {last4}
      </div>
    </div>
  )
}