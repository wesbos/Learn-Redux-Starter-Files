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

// ________________________________________________
// SUGAR ------> INSTALL REDUX DEV TOOLS.
// Install Redux dev tools into our store by using a store enhancer. This     enables Redux Dev Tools in chrome to recognise your store.
  const enhancers = compose(
  // compose infuses our store with any of the enhancers we want.
  window.devToolsExtension ? window.devToolsExtension() : f => f
  // If dev tools is in the window, install it. If not just return the store.
);
// Then pass createStore the enhancers when creating the store below.
// ________________________________________________


// Creating the store using our collection of reducers and collection of data
const store = createStore(rootReducer, defaultState, enhancers);

export const history = syncHistoryWithStore(browserHistory, store);


// ________________________________________________
// SUGAR ------> HOT RELOAD REDUCERS. Done by accepting the hot reload & then re-requiring the reducer.
if(module.hot) {
  // First we check if the module is hot
  module.hot.accept('./reducers/', () => {
    // If it is hot, we accept it and run a function that is going to re-require and swap out the module for us.
    const nextRootReducer = require('./reducers/index').default;
    // Grab the main reducer (which is the top level index one). Use require because you cannot use an ES6 import statement inside of a function, must be done at top level.
    store.replaceReducer(nextRootReducer)
    // Finally we just replace the entire reducer with store.replaceReducer() and pass it the nextRootReducer.
  });
}
// ________________________________________________

// Export the newly created store
export default store;
