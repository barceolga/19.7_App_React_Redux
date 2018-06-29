import React from 'react';
import './Comment.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Comment = ({
  text,
  votes,
  id,
  thumbUpComment,
  thumbDownComment,
  removeComment,
  updateComment
}) =>
<li className="Comment-item">
    {text} <p>votes: <span>{votes}</span></p>
    <div className="Comment-group">
        <button className="Comment-group_button" onClick={() => thumbUpComment(id)}><FontAwesomeIcon icon="thumbs-up" /></button>
        <button className="Comment-group_button" onClick={() => thumbDownComment(id)}><FontAwesomeIcon icon="thumbs-down"  /></button>
        <button className="Comment-group_button" onClick={() => removeComment(id)}>Delete</button>
        <button className="Comment-group_button" onClick={() => updateComment(id, text)}>Update</button>
    </div>
</li>;

export default Comment;
