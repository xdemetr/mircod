import { SELECT_CONNECTION, SELECT_DISTANCE, SELECT_OPTION } from '../reducers/optionsReducer';

export const selectOption = option => {
  return {
    type: SELECT_OPTION,
    option
  };
};

export const selectDistance = distance => {
  return {
    type: SELECT_DISTANCE,
    distance
  };
};

export const selectConnection = connection => {
  return {
    type: SELECT_CONNECTION,
    connection
  };
};
