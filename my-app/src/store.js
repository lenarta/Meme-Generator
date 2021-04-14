import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import loginReducer from './reducers/loginReducer';
import memeReducer from './reducers/memeReducer';
import memeMakerReducer from './reducers/memeMakerReducer';

const rootReducer = combineReducers({
  login: loginReducer,
  feed: memeReducer,
  picture: memeMakerReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
