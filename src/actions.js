/*jshint esversion: 6*/
import uuid from 'uuid';

//Examples of types of actions and actions' creators  in Redux
export const ADD_COMMENT = 'ADD_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';
export const UPDATE_COMMENT = 'UPDATE_COMMENT';


export function addComment(text) {
  return {
    type: ADD_COMMENT,
    text: text,
    id: uuid.v4()
  };
}

export function removeComment(commentId) {
  return {
    type: REMOVE_COMMENT,
    id: commentId
  };
}

export function editComment(commentId, commentText) {
  return {
    type: EDIT_COMMENT,
    text: commentText,
    id: commentId
  };
}

export function updateComment(commentId, commentText) {
  return {
    type: UPDATE_COMMENT,
    text: commentText,
    id: commentId
  };
}

export function thumbUpComment(commentId) {
  return {
    type: THUMB_UP_COMMENT,
    id: commentId
  };
}

export function thumbDownComment(commentId) {
  return {
    type: THUMB_DOWN_COMMENT,
    id: commentId
  };
}
