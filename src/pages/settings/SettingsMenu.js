import React from "react";
import { NavLink } from "react-router-dom";

export default function () {
  return (
    <aside className="menu">
      <p className="menu-label">
        Payment
      </p>
      <ul className="menu-list">
        <li><NavLink to="/settings/limit" activeClassName="is-active"><span>Limits</span></NavLink></li>
        <li><NavLink to="/settings/charge" activeClassName="is-active"><span>Charge</span></NavLink></li>
        <li><NavLink to="/settings/payout" activeClassName="is-active"><span>Payout</span></NavLink></li>
      </ul>
    </aside>
  )
}