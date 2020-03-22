import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';

import optionsReducer from './reducers/optionsReducer';

const reducers = combineReducers({
  options: optionsReducer,
});

const composeEnhancers = (window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())  || compose;


// const store = createStore(
//   reducers,
//   compose(
//     applyMiddleware(ThunkMiddleware),
//     composeEnhancers,
//   ),
// );

const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunkMiddleware),
    composeEnhancers
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
