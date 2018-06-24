/*jshint esversion: 6*/
import uuid from 'uuid';

//Examples of types of actions and actions' creators  in Redux
export const ADD_COMMENT = 'ADD_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';


export function addComment(text) {
  return {
    type: ADD_COMMENT,
    text: text,
    id: uuid.v4()
  };
}

export function removeComment(id) {
  return {
    type: REMOVE_COMMENT,
    id
  };
}

export function editComment(id, text) {
  return {
    type: EDIT_COMMENT,
    text,
    id
  };
}

export function thumbUpComment(id, votes) {
  return {
    type: THUMB_UP_COMMENT,
    id
  };
}

export function thumbDownComment(id, votes) {
  return {
    type: THUMB_DOWN_COMMENT,
    id
  };
}
