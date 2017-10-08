import React from "react";
import Espresso from "./coffee/espresso.svg";
import Americano from "./coffee/americano.svg";
import Latte from "./coffee/latte.svg";
import Siphone from "./coffee/siphone.svg";
import Kettle from "./coffee/kettle.svg";
import Pot from "./coffee/pot.svg";
import Termos from "./coffee/termos.svg";


export default function MoneyToCoffeeIcon({ amount }) {
  if (amount <= 5) {
    return <Espresso width={100} height={100}/>;
  } else if (amount <= 10) {
    return <Americano width={100} height={100}/>;
  } else if (amount <= 15) {
    return <Latte width={100} height={100}/>;
  } else if (amount <= 20) {
    return <Siphone width={100} height={100}/>;
  } else if (amount <= 25) {
    return <Kettle width={100} height={100}/>;
  } else if (amount <= 30) {
    return <Pot width={100} height={100}/>;
  } else {
    return <Termos width={100} height={100}/>;
  }
}
