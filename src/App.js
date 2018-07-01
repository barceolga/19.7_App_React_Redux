import React from 'react';
import CommentsListContainer from './CommentsListContainer';
import ContainerForm from './CommentForm';
import DevTools from './DevTools.js';
import './App.css';

  const App= () => {
    return (
      <div className="App">
          <h1 className="App-title"> The comments app </h1>
          <h2 className="App-intro">Write your comment here</h2>
          <ContainerForm/>
          <h2 className="App-intro"> The comments list</h2>
          <CommentsListContainer/>
          <DevTools />
      </div>
    );
  };


export default App;
