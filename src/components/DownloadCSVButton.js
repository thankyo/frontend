import React from "react";
import RefreshLink from "components/RefreshLink";
import { DownloadIcon } from "components/Icon";

export default function DownloadCSVButton({ onClick }) {
  return (
    <div className="is-pulled-left">
      <RefreshLink className="is-info is-small button" onClick={onClick}>
        <DownloadIcon>CSV</DownloadIcon>
      </RefreshLink>
    </div>
  )
}