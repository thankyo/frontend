const LINKS = [
  { pathname: "/dashboard/my", name: "Supporter Mode", icon: "fa fa-thumbs-o-up" },
  { pathname: "/creator", name: "Creator Mode", icon: "fa fa-paint-brush" },
  { pathname: "/settings", name: "Settings", icon: "fa fa-cogs" },
  { pathname: "/settings/limit", name: "Limits", isHiddenDesktop: true },
  { pathname: "/settings/charge", name: "Charge", isHiddenDesktop: true },
  { pathname: "/settings/payout", name: "Payout", isHiddenDesktop: true },
];

export default function stateReducer(state = { links: LINKS }, { type, payload }) {
  return state;
}