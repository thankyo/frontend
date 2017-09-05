import React from "react";

function Espresso() {
  return (
    <img src="/img/sup_icon_espresso.svg" width={100} height={40} alt={"Espresso"}/>
  )
}

function Americano() {
  return (
    <img src="/img/sup_icon_americano.svg" width={100} height={40} alt={"Americano"}/>
  )
}

function Latte() {
  return (
    <img src="/img/sup_icon_latte.svg" width={100} height={40} alt={"Latte"}/>
  )
}

function Siphone() {
  return (
    <img src="/img/sup_icon_latte.svg" width={100} height={40} alt={"Siphone"}/>
  )
}

function Kettle() {
  return (
    <img src="/img/creat_icon_kettle.svg" width={100} height={40} alt={"Kettle"}/>
  )
}

function Pot() {
  return (
    <img src="/img/creat_icon_pot.svg" width={100} height={40} alt={"Pot"}/>
  )
}

function Termos() {
  return (
    <img src="/img/creat_icon_termos.svg" width={100} height={40} alt={"Termos"}/>
  )
}


export default function MoneyToCoffeeIcon({ amount }) {
  if (amount <= 5) {
    return <Espresso/>;
  } else if (amount <= 10) {
    return <Americano/>;
  } else if (amount <= 15) {
    return <Latte/>;
  } else if (amount <= 20) {
    return <Siphone/>;
  } else if (amount <= 25) {
    return <Kettle/>;
  } else if (amount <= 30) {
    return <Pot/>;
  } else {
    return <Termos/>;
  }
}
