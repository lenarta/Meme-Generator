import {
  LOAD_PICTURE_URL,
} from '../constants/actionTypes';

export function loadPictureUrl(payload) {
  return {
    type: LOAD_PICTURE_URL,
    payload,
  };
}
