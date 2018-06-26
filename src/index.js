import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers.js';
import DevTools from './DevTools';
import {
  addComment,
  thumbUpComment,
  thumbDownComment,
  removeComment,
    /*editComment,*/
} from './actions';


const store = createStore(reducer, DevTools.instrument());

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
/*store.dispatch(addComment('first comment'));
store.dispatch(addComment('second comment'));*/

export {thumbUpComment};
export {thumbDownComment};
export {removeComment};
export {addComment};
