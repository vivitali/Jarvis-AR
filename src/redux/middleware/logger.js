export const logger = store => next => action => {
  // console.warn('dispatching', action)
  let result = next(action);
  // console.warn('next state', store.getState())
  return result;
};
