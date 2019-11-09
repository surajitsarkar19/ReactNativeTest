import {combineReducers} from 'redux';
import {reducer as catagoryReducer} from '../actions/getAllCatagories';
import {reducer as shopReducer} from '../actions/getAllShops';

const rootReducer = combineReducers({
  catagory: catagoryReducer,
  shop: shopReducer,
});

export default rootReducer;
