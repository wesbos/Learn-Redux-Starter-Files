import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// import the root reducer
import rootReducer from './reducers/index';

import comments from './data/comments';
import posts from './data/posts';

//create an object for the default data
const defaultState = {
  posts,    // ES6 shortcut for => posts : posts,
  comments  // ES6 shortcut for => comments : comments
}

const store = createStore(rootReducer, defaultState); //createSTore = method imported from redux, to store our state

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
