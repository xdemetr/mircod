const initialState = {
  list: [
    { id: 1, value: 'Temperature', icon: 'icon-01' },
    { id: 2, value: 'Water temperature', icon: 'icon-02' },
    { id: 3, value: 'Cloud temperature12312323131232131', icon: 'icon-03' },
    { id: 4, value: 'Dust temperature', icon: 'icon-01' },
    { id: 5, value: 'Temperature', icon: 'icon-01' },
    { id: 6, value: 'Water temperature', icon: 'icon-02' },
    { id: 7, value: 'Cloud temperature', icon: 'icon-03' },
    { id: 8, value: 'Dust temperature', icon: 'icon-01' },
    { id: 9, value: 'Temperature', icon: 'icon-01' },
    { id: 10, value: 'Water temperature', icon: 'icon-02' },
    { id: 11, value: 'Cloud temperature', icon: 'icon-03' },
    { id: 12, value: 'Dust temperature', icon: 'icon-01' },
  ],
  selected: [{ id: 1, value: 'Temperature', icon: 'icon-01' }],
  distance: 10,
  connections: [
    { id: 1, value: 'xbee', icon: 'xbee', selected: false },
    { id: 2, value: 'wave', icon: 'wave', selected: false },
    { id: 3, value: 'wifi', icon: 'wifi', selected: false },
    { id: 4, value: 'mbus', icon: 'mbus', selected: false },
    { id: 5, value: 'wave', icon: 'wave', selected: false },
    { id: 6, value: 'wifi', icon: 'wifi', selected: false },
    { id: 7, value: 'mbus', icon: 'mbus', selected: false },
    { id: 8, value: 'xbee', icon: 'xbee', selected: false },
  ]
};

export const SELECT_OPTION = 'SELECT_OPTION';
export const SELECT_DISTANCE = 'SELECT_DISTANCE';
export const SELECT_CONNECTION = 'SELECT_CONNECTION';


const updateSelected = (state, option) => {
  let newSelected = [];
  const { selected } = state;
  const existOption = selected.find((pl) => pl.id === option.id);

  if (existOption) {
    const idx = selected.findIndex((pl) => pl.id === existOption.id);
    const newArr = [...selected.slice(0, idx), ...selected.slice(idx + 1)];
    newSelected = newArr;
  } else {
    const newArr = [...selected, option];
    newSelected = newArr;
  }

  return {
    ...state,
    selected: newSelected,
  };
};

const updateConnection = (state, connection) => {
  let newConnections = [];
  const {connections} = state;
  const existSelect = connections.find(i => i.id === connection);
  const idx = connections.findIndex(i => i.id === connection);

  connections.forEach(item => item.selected = false);

  existSelect.selected = !existSelect.selected;

  // if (existSelect.selected) {
  //   existSelect.selected = false;
  // } else {
  //   existSelect.selected = true;
  // }

  newConnections = [...connections.slice(0, idx), existSelect, ...connections.slice(idx+1)]

  return {
    ...state,
    connections: newConnections
  }
};

const optionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_OPTION:
      return updateSelected(state, action.option);

    case SELECT_DISTANCE: {
      return {
        ...state,
        distance: action.distance
      };
    }

    case SELECT_CONNECTION: {
      return updateConnection(state, action.connection)
    }

    default:
      return state;
  }
};

export default optionsReducer;
