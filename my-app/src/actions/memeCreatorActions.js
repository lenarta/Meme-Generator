import {
  ADD_PICTURE_URL,
} from '../constants/actionTypes';

export function addPictureUrl(payload) {
  return {
    type: ADD_PICTURE_URL,
    payload,
  };
}
