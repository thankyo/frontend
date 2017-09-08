import React from "react";
import Espresso from "../../../../assets/img/sup_icon_espresso.svg";
import Americano from "../../../../assets/img/sup_icon_americano.svg";
import Latte from "../../../../assets/img/sup_icon_latte.svg";
import Siphone from "../../../../assets/img/sup_icon_siphone.svg";
import Kettle from "../../../../assets/img/creat_icon_kettle.svg";
import Pot from "../../../../assets/img/creat_icon_pot.svg";
import Termos from "../../../../assets/img/creat_icon_termos.svg";


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
