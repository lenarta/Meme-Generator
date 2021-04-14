import {
  LOAD_PICTURE_URL,
} from '../constants/actionTypes';

const initialState = {
  data: {
    pictureUrl: '',
  },
};

function memeMakerReducer(state = initialState, action) {
  if (action.type === LOAD_PICTURE_URL) {
    return {
      ...state,
      data: action.payload,
    };
  }
  return state;
}

export default memeMakerReducer;