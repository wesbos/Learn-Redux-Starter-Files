import React from 'react';
import { Link } from 'react-router';
import Single from './Single';
import PhotoGrid from './PhotoGrid';

class Main extends React.Component {
  render() {
    return (
      <div>
        <h1>
          <Link to="/">Reduxstagram</Link>
        </h1>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    );
  }
}

export default Main;
