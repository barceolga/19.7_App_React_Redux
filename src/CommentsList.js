import React from 'react';
import Comment from './CommentContainer.js';
import './CommentsList.css'

const CommentsList = ({comments}) => <ul className="Comments-list">{comments.map(comment => <Comment key={comment.id} {...comment} />)}</ul>
;

export default CommentsList;
