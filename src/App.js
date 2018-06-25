import React from 'react';
import CommentsListContainer from './CommentsListContainer';
import './App.css';

const App = () => {
    return (
      <div className="App">
          <h1> The comments app </h1>
          <h2> The comments list</h2>
          <CommentsListContainer/>
      </div>
    );
};

export default App;
