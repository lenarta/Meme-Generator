import { LOAD_MEMES, UPDATE_MEME } from '../constants/actionTypes';

export function loadMemesAction(payload) {
  return {
    type: LOAD_MEMES,
    payload,
  };
}
export function updateMemeAction(payload) {
  return {
    type: UPDATE_MEME,
    payload,
  };
}
