import reduxHelper from '../reduxHelper';
import {getAllShops} from '../../api';
export const {action, actionTypes, reducer} = reduxHelper('shop', function() {
  return getAllShops();
});
