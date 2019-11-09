import reduxHelper from '../reduxHelper';
import {getAllCatagories} from '../../api';
export const {action, actionTypes, reducer} = reduxHelper(
  'catagory',
  function() {
    return getAllCatagories();
  },
);
