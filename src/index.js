import React from 'react';
import ReactDOM from 'react-dom';
import { reducer as formReducer} from 'redux-form';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
//import basicReducer from './reducers.js';
import DevTools from './DevTools';
import {addComment} from './actions.js'
import comments from './comments.js';
import users from './users.js';

const rootReducer = combineReducers({
  form: formReducer,
  users,
  comments
})

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
