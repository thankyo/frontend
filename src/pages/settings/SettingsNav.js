import React from "react";
import { NavLink } from "react-router-dom";

export default function () {
  return (
    <aside className="menu is-hidden-mobile">
      <p className="menu-label">
        Profile
      </p>
      <ul className="menu-list">
        <li><NavLink to="/settings/profile" activeClassName="is-active"><span>Profile</span></NavLink></li>
      </ul>
      <p className="menu-label">
        Payment
      </p>
      <ul className="menu-list">
        <li><NavLink to="/settings/limit" activeClassName="is-active"><span>Limits</span></NavLink></li>
        <li><NavLink to="/settings/charge" activeClassName="is-active"><span>Charge</span></NavLink></li>
        <li><NavLink to="/settings/payout" activeClassName="is-active"><span>Payout</span></NavLink></li>
      </ul>
      <p className="menu-label">
        Transactions
      </p>
      <ul className="menu-list">
        <li><NavLink to="/settings/transaction/pending" activeClassName="is-active"><span>Pending</span></NavLink></li>
        <li><NavLink to="/settings/transaction/complete" activeClassName="is-active"><span>Complete</span></NavLink></li>
      </ul>
    </aside>
  )
}