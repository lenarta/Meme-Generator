import {
  ADD_PICTURE_URL,
} from '../constants/actionTypes';

const initialState = {
  pictureUrl: '',
};

function memeMakerReducer(state = initialState, action) {
  if (action.type === ADD_PICTURE_URL) {
    return {
      ...state,
      pictureUrl: action.payload
    };
  }
  return state;
}

export default memeMakerReducer;