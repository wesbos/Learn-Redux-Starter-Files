import React from 'react';
import { Link } from 'react-router';

const Main = React.createClass({
  render() {
    return (
      <div>
        <h1>
          <Link to="/">Reduxstagram</Link>
        </h1>
        {React.cloneElement(this.props.children, this.props)}
        // Takes the props of the parent componenet, clones them and then passes them down to the child components.
      </div>
    )
  }
});

export default Main;
