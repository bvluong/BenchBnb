import React from 'react';
import { Route, Link } from 'react-router-dom';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const { currentUser } = this.props;
    if (!!currentUser) {
      return (
        <div>
          <h3>{`Welcome ${currentUser.username}`}</h3>
          <button onClick={this.props.logout}>Logout</button>
        </div>
      );
    } else {
      return (
        <div>
          <Link to='/signup'>Sign Up</Link>
          <Link to='/login'>Login</Link>
        </div>
      );
    }
  }
}

export default Greeting;
