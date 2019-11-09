import {delay} from '../utility';
import catagories from './categories';
import shops from './shops';

export const getAllCatagories = async () => {
  await delay();
  return catagories.data.map(data => processData(data));
};

export const getCatagoriess = async catagory_id => {
  await delay();
  return catagories.data.filter(({id}) => id === catagory_id);
};

const processData = ({id, type, attributes}) => {
  return {id, ...attributes};
};

export const getAllShops = async catagory => {
  await delay();
  return shops.data.map(data => processData(data));
};
