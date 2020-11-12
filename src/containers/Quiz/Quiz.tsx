import React, { Component, ReactNode } from 'react';
import styles from './quiz.module.css';
import ActiveQuiz from '../../components/ActiveQuiz';
import FinishedQuiz from '../../components/FinishedQuiz';
import { IonAnswerClick, IQuiz, IResults } from '../../types';
import axios from '../../axios/axios-quiz';
import Loader from '../../components/UI/Loader';

class Quiz extends Component {
  state: any = {
    results: {},
    isFinished: false,
    activeQuestion: 0,
    answerState: null,
    quiz: [],
    loading: true,
  };

  onAnswerClickHandler: IonAnswerClick = (answerId: number) => {
    if (this.state.answerState) {
      const key = Object.keys(this.state.answerState)[0];
      if (this.state.answerState[key] === 'success') {
        return;
      }
    }

    const question: IQuiz = this.state.quiz[this.state.activeQuestion];
    const results: IResults = this.state.results;

    if (question.rightAnswerId === answerId) {
      if (!results[question.id]) {
        results[question.id] = 'success';
      }

      this.setState({
        answerState: {
          [answerId]: 'success',
        },
        results,
      });

      const timeout: number = window.setTimeout(() => {
        if (this.isQuizFinished()) {
          this.setState({
            isFinished: true,
          });
        } else {
          this.setState({
            activeQuestion: this.state.activeQuestion + 1,
            answerState: null,
          });
        }

        window.clearTimeout(timeout);
      }, 500);
    } else {
      results[question.id] = 'error';
      this.setState({
        answerState: {
          [answerId]: 'error',
        },
        results,
      });
    }
  };

  isQuizFinished(): boolean {
    return this.state.activeQuestion + 1 === this.state.quiz.length;
  }

  retryHandler = (): void => {
    this.setState({
      activeQuestion: 0,
      answerState: null,
      isFinished: false,
      results: {},
    });
  };

  async componentDidMount() {
    try {
      const response = await axios.get(
        // @ts-ignore
        `/quizes/${this.props.match.params.id}.json`
      );

      const quiz = response.data;

      this.setState({
        quiz,
        loading: false,
      });
    } catch (err) {
      console.log(err);
    }
  }

  render(): ReactNode {
    return (
      <div className={styles.quiz}>
        <div className={styles.quizWrapper}>
          <h1>Ответьте на все вопросы</h1>

          {this.state.loading ? (
            <Loader />
          ) : this.state.isFinished ? (
            <FinishedQuiz
              results={this.state.results}
              quiz={this.state.quiz}
              onRetry={this.retryHandler}
            />
          ) : (
            <ActiveQuiz
              answers={this.state.quiz[this.state.activeQuestion].answers}
              question={this.state.quiz[this.state.activeQuestion].question}
              quizLength={this.state.quiz.length}
              answerNumber={this.state.activeQuestion + 1}
              onAnswerClick={this.onAnswerClickHandler}
              answerState={this.state.answerState}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Quiz;
