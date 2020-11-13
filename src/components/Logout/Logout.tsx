import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../store/actions/auth';

class Logout extends Component<any, any> {
  componentDidMount() {
    this.props.logout();
  }

  render() {
    return <Redirect to={'/'} />;
  }
}

function mapDispatchToProps(dispatch: any) {
  return {
    logout: () => dispatch(logout()),
  };
}

export default connect(null, mapDispatchToProps)(Logout);
