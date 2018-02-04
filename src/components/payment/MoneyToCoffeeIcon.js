import React from "react";
import Espresso from "./coffee/espresso.svg";
import Americano from "./coffee/americano.svg";
import Latte from "./coffee/latte.svg";
import Siphon from "./coffee/siphon.svg";
import Kettle from "./coffee/kettle.svg";
import Pot from "./coffee/pot.svg";
import Termos from "./coffee/termos.svg";


export default function MoneyToCoffeeIcon({ amount, fill }) {
  let props = {
    width: 100,
    height: 100,
    fill
  };
  if (amount <= 5) {
    return <Espresso {... props}/>;
  } else if (amount <= 10) {
    return <Americano {... props}/>;
  } else if (amount <= 15) {
    return <Latte {... props}/>;
  } else if (amount <= 20) {
    return <Siphon {... props}/>;
  } else if (amount <= 25) {
    return <Kettle {... props}/>;
  } else if (amount <= 30) {
    return <Pot {... props}/>;
  } else {
    return <Termos {... props}/>;
  }
}
