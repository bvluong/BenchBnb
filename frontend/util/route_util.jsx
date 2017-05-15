import { connect } from 'react-redux';
import { withRouter, Redirect, Route } from 'react-router-dom';
import React from 'react';

const Auth = ({component: Component, path, loggedIn}) => (
  <Route path={path} render={(props) => (
      !loggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect to="/"/>
      )
    )}/>
);

const mapStateToProps = state => {
  return {loggedIN: Boolean(state.session.currentUser)};
};

export const AuthRoute = withRouter(connect(mapStateToProps,null)(Auth));