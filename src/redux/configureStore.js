import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rocketsReducer } from './rockets/rockets';
import missionsReducer from './missions/missions';

const reducer = combineReducers({
  missions: missionsReducer,
  // additional reducers could be added here
  rockets: rocketsReducer,
});

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk, logger)),
);

export default store;
