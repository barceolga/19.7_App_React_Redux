import React from 'react';
import './Comment.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Comment = ({
  text,
  positive,
  negative,
  votes,
  id,
  thumbUpComment,
  thumbDownComment,
  removeComment,
  updateComment
}) => {
 return (
      <li className="Comment-item">
          <div className="Comment-item_common">
              <p className="Comment-item_paragraph">{text}</p>
              <div className="evaluation">
                  <div className="evaluation-positive"> <span className="positive">{positive}</span></div>
                  <div className="evaluation-total"><span className="total">Sum: {votes}</span></div>
                  <div className="evaluation-negative"><span className="negative">{negative}</span></div>
              </div>
          </div>
          <div className="Comment-group">
                  <button className="Comment-group_button" onClick={() => thumbUpComment(id)}><FontAwesomeIcon icon="thumbs-up" /></button>
                  <button className="Comment-group_button_negative" onClick={() => thumbDownComment(id)}><FontAwesomeIcon icon="thumbs-down" /></button>
                  <button className="Comment-group_button" onClick={() => updateComment(id, text)}><FontAwesomeIcon icon="edit" /></button>
                  <button className="Comment-group_button_negative" onClick={() => removeComment(id)}><FontAwesomeIcon icon="trash" /></button>
          </div>
      </li>
  );
}

export default Comment;
