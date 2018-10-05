import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import posts from './posts';
import comments from './comments';
// combines all reducers from reducers folder and prepare for export
const rootReducer = combineReducers({posts, comments, routing: routerReducer});

export default rootReducer;
