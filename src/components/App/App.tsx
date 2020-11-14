import React, { useEffect } from 'react';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Layout from '../../hoc/Layout';
import Auth from '../../containers/Auth';
import Quiz from '../../containers/Quiz';
import QuizCreator from '../../containers/QuizCreator';
import QuizList from '../../containers/QuizList';
import { autoLogin } from '../../store/actions/auth';
import Logout from '../Logout';
import { IState } from '../../types/interfaces';

const App: React.FC = (props: any): JSX.Element => {
  useEffect(() => {
    props.autoLogin();
  }, []);

  let routes: JSX.Element = (
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

function mapStateToProps(state: IState) {
  return {
    isAuth: !!state.auth.token,
  };
}

function mapDispatchToProps(dispatch: Function) {
  return {
    autoLogin: () => dispatch(autoLogin()),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
