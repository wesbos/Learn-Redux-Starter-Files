import React from 'react';
import { render } from 'react-dom';

//Import css
import css from './styles/style.styl';

//Import Components
import Main from './components/Main';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

//import react router deps
import { Router, Route, IndexRoute, browswerHistory } from 'react-router';

const router - (
  <Router history={broswerHistory}>
    <Route path="/" component={Main}>
  </Router>
  )

render(
  <Main />,
  document.getElementById('root')
)
 
