import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../store/actions/auth';

interface ILogout {
  logout: Function;
}

const Logout: React.FC<ILogout> = ({ logout }): JSX.Element => {
  useEffect(() => {
    logout();
  }, [logout]);

  return <Redirect to={'/'} />;
};

function mapDispatchToProps(dispatch: any) {
  return {
    logout: () => dispatch(logout()),
  };
}

export default connect(null, mapDispatchToProps)(Logout);
