import React from 'react';
import {thumbUpComment} from './index.js';
import {thumbDownComment} from './index.js';

const Comment = ({text, votes, id, thumbUpComment, thumbDownComment}) =>
<li>
    {text} <span>votes: {votes}</span>
    <button onClick={() => thumbUpComment(id)}>Thumb up</button>
    <button onClick={() => thumbDownComment(id)}>Thumb down</button>
</li>;

export default Comment;
