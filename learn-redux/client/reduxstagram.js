import React from 'react';
import { render } from 'react-dom';
import css from './styles/style.styl';

import App from './components/app';
import PhotoSingle from './components/photosingle';
import PhotoGrid from './components/photogrid';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
//curley brackers - named export , not curley is a default export
import store, { history } from './store';


//provider exposes our store to the application
const router = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={PhotoGrid}></IndexRoute>
                <Route path="/view/:postId" component={PhotoSingle}></Route>
            </Route>
        </Router>
    </Provider>
    
)

render(router, document.getElementById('root'));