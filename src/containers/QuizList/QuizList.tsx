import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styles from './quizList.module.css';
import Loader from '../../components/UI/Loader';
import fetchQuiz from '../../store/actions/quiz';

class QuizList extends Component<any, any> {
  renderQuiz(): React.ReactFragment {
    return this.props.quiz.map((quiz: any) => {
      return (
        <li key={quiz.id}>
          <NavLink to={'/quiz/' + quiz.id}>{quiz.name}</NavLink>
        </li>
      );
    });
  }

  componentDidMount() {
    this.props.fetchQuiz();
  }

  render(): JSX.Element {
    return (
      <div className={styles.quizList}>
        <div>
          <h1>Список тестов</h1>

          {this.props.loading && this.props.quiz.length !== 0 ? (
            <Loader />
          ) : (
            <ul>{this.renderQuiz()}</ul>
          )}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state: any) {
  return {
    quiz: state.quiz.quiz,
    loading: state.quiz.loading,
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    fetchQuiz: () => dispatch(fetchQuiz()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizList);
