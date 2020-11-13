import React, { Component, ReactNode } from 'react';
import styles from './quiz.module.css';
import ActiveQuiz from '../../components/ActiveQuiz';
import FinishedQuiz from '../../components/FinishedQuiz';
import Loader from '../../components/UI/Loader';
import { connect } from 'react-redux';
import {
  fetchQuizById,
  quizAnswerClick,
  retryQuiz,
} from '../../store/actions/quiz';

class Quiz extends Component<any, any> {
  componentDidMount() {
    this.props.fetchQuizById(this.props.match.params.id);
  }

  componentWillUnmount() {
    this.props.retryQuiz();
  }

  render(): ReactNode {
    return (
      <div className={styles.quiz}>
        <div className={styles.quizWrapper}>
          <h1>Ответьте на все вопросы</h1>

          {this.props.loading || !this.props.quizis ? (
            <Loader />
          ) : this.props.isFinished ? (
            <FinishedQuiz
              results={this.props.results}
              quiz={this.props.quizis}
              onRetry={this.props.retryQuiz}
            />
          ) : (
            <ActiveQuiz
              answers={this.props.quizis[this.props.activeQuestion].answers}
              question={this.props.quizis[this.props.activeQuestion].question}
              quizLength={this.props.quizis.length}
              answerNumber={this.props.activeQuestion + 1}
              onAnswerClick={this.props.quizAnswerClick}
              answerState={this.props.answerState}
            />
          )}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state: any) {
  return {
    results: state.quiz.results,
    isFinished: state.quiz.isFinished,
    activeQuestion: state.quiz.activeQuestion,
    answerState: state.quiz.answerState,
    quizis: state.quiz.quizis,
    loading: state.quiz.loading,
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    fetchQuizById: (id: any) => dispatch(fetchQuizById(id)),
    quizAnswerClick: (answerId: any) => dispatch(quizAnswerClick(answerId)),
    retryQuiz: () => dispatch(retryQuiz()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
