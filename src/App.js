import React, {Component} from 'react';
import CommentsListContainer from './CommentsListContainer';
import CommentFormContainer from './CommentFormContainer';
import {addComment} from './actions.js';
import './App.css';

  const App= () => {
    return (
      <div className="App">
          <h1> The comments app </h1>
          <h2>Write your comment here</h2>
          <CommentFormContainer />
          <h2> The comments list</h2>
          <CommentsListContainer/>
      </div>
    );
  };


export default App;
