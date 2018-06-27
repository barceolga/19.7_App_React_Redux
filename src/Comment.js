import React from 'react';
import {thumbUpComment} from './actions.js';
import {thumbDownComment} from './actions.js';
import {removeComment} from './actions.js';
//import {addComment} from './index.js';

const Comment = ({text, votes, id, thumbUpComment, thumbDownComment, removeComment}) =>
<li>
    {text} <span>votes: {votes}</span>
    <div>
        <button onClick={() => thumbUpComment(id)}>Thumb up</button>
        <button onClick={() => thumbDownComment(id)}>Thumb down</button>
        <button onClick={() => removeComment(id)}>Delete</button>
    </div>
</li>;

export default Comment;
