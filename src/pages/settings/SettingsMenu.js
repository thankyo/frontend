import React from "react";
import { NavLink } from "react-router-dom";

export default function () {
  return (
    <aside className="menu">
      <p className="menu-label">
        Payment
      </p>
      <ul className="menu-list">
        <li><NavLink to="/settings/limit" activeClassName="is-active">Limits</NavLink></li>
        <li><NavLink to="/settings/payment" activeClassName="is-active"><span className="icon"><i className="fa fa-credit-card"/></span><span>Payment Method</span></NavLink></li>
        <li><NavLink to="/settings/payout" activeClassName="is-active"><span className="icon"><i className="fa fa-credit-card-alt"/></span><span>Payout Method</span></NavLink></li>
      </ul>
    </aside>
  )
}