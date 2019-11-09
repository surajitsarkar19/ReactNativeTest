const loggingMiddleware = store => next => action => {
  console.info(
    `INFO: Dispatching a ${action.type} action with payload:`,
    action.payload,
  );
  const result = next(action);
  //console.debug('Next State:', store.getState());
  return result;
};

export default loggingMiddleware;
