import reduxHelper from '../reduxHelper';
export const {action, actionTypes, reducer} = reduxHelper(
  'catagory_filter',
  function(filterArr) {
    return {
      filter: filterArr,
    };
  },
);
