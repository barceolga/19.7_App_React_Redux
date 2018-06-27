import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers.js';
import {
  ADD_COMMENT,
  REMOVE_COMMENT,
  EDIT_COMMENT,
  THUMB_UP_COMMENT,
  THUMB_DOWN_COMMENT,
  addComment
} from './actions';


const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();

store.dispatch(addComment('first comment'));
store.dispatch(addComment('second comment'));
