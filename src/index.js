import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faThumbsUp, faThumbsDown, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import DevTools from './DevTools';

library.add(fab, faThumbsUp, faThumbsDown, faEdit, faTrash)


const store = createStore(rootReducer, /*DevTools.instrument()*/);

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
