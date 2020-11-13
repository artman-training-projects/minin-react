import React, { useEffect } from 'react';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import Layout from '../../hoc/Layout';
import Auth from '../../containers/Auth';
import Quiz from '../../containers/Quiz';
import QuizCreator from '../../containers/QuizCreator';
import QuizList from '../../containers/QuizList';
import { connect } from 'react-redux';
import Logout from '../Logout';
import { autoLogin } from '../../store/actions/auth';

const App: React.FC = (props: any): JSX.Element => {
  useEffect(() => {
    props.autoLogin();
  }, []);

  let routes = (
    <Switch>
      <Route path="/auth" component={Auth} />
      <Route path="/quiz/:id" component={Quiz} />
      <Route path="/" exact component={QuizList} />
      <Redirect to="/" />
    </Switch>
  );

  if (props.isAuth) {
    routes = (
      <Switch>
        <Route path="/quiz-creator" component={QuizCreator} />
        <Route path="/quiz/:id" component={Quiz} />
        <Route path="/logout" component={Logout} />
        <Route path="/" exact component={QuizList} />
        <Redirect to="/" />
      </Switch>
    );
  }

  return <Layout>{routes}</Layout>;
};

function mapStateToProps(state: any) {
  return {
    isAuth: !!state.auth.token,
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    autoLogin: () => dispatch(autoLogin()),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
