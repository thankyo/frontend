import { combineReducers } from 'redux';

import charge from './charge';
import payout from './payout';

export default combineReducers(
  {
    charge,
    payout,
  }
);
