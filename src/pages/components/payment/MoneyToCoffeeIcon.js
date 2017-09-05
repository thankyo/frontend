import React from "react";

function coffeeIcon(amount) {
  if (amount <= 5) {
    return "/img/sup_icon_espresso.svg";
  } else if (amount <= 10) {
    return "/img/sup_icon_americano.svg";
  } else if (amount <= 15) {
    return "/img/sup_icon_latte.svg";
  } else if (amount <= 20) {
    return "/img/sup_icon_siphone.svg";
  } else if (amount <= 25) {
    return "/img/creat_icon_kettle.svg";
  } else if (amount <= 30) {
    return "/img/creat_icon_pot.svg";
  } else {
    return "/img/creat_icon_termos.svg";
  }
}

export default function MoneyToCoffeeIcon({ amount }) {
  return (
    <img src={coffeeIcon(amount)} width="100" height="40" alt="Limit"/>
  )
}
