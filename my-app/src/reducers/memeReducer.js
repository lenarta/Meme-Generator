import {
  LOAD_MEMES,
  UPDATE_MEME,
  DELETE_STORE,
} from '../constants/actionTypes';

const initialState = {};

function memeReducer(state = initialState, action) {
  if (action.type === LOAD_MEMES) {
    return {
      ...state,
      memes: action.payload,
    };
  }
  if (action.type === UPDATE_MEME) {
    return {
      ...state,
      memes: action.payload,
    };
  }
  if (action.type === DELETE_STORE) {
    return initialState;
  }
  return state;
}

export default memeReducer;
