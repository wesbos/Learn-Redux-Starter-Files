import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

//import the root reducer
import rootReducer from './reducers/index'; // rootReducer is just a hub for importing all the individual reducers and exporting them as a whole. Syntax => const rootReducer = combineReducers({posts, comments, routing: routerReducer});

import comments from './data/comments'; // importing the initial data
import posts from './data/posts'; // importing the initial data

// Passing initial data to defaultState
const defaultState = {
  posts: posts,
  comments: comments
};

// Creating the store using our collection of reducers and collection of data
const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

// Export the newly created store
export default store;
