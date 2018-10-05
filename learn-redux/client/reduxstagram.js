import React from 'react';
import { render } from 'react-dom';

// Import css
import css from './styles/style.styl';

// Import Components
import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

// import react router dependecies
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
  <Provider store={store}>
    <Router history={history}>
      // Router componenent needs a history object, which here is browserHistory which allows you to do push state without having to reload the page.
      <Route path="/" component={App}>
        // If the url matches "/" or a further extension of, grab the Main component.
        <IndexRoute component={PhotoGrid}></IndexRoute>
        <Route path="/view/:postId" component={Single}></Route>
        // Then depending on the URL structure, either pass 'Main', 'PhotoGrid' or 'Single'.
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'));
