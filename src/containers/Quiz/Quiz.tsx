import React, { Component, ReactNode } from 'react';
import styles from './quiz.module.css';
import ActiveQuiz from '../../components/ActiveQuiz';
import FinishedQuiz from '../../components/FinishedQuiz';
import { IonAnswerClick, IQuiz, IResults } from '../../types';

class Quiz extends Component {
  state: any = {
    results: {},
    isFinished: false,
    activeQuestion: 0,
    answerState: null,
    quiz: [
      {
        question: 'Какого цвета небо?',
        rightAnswerId: 2,
        id: 1,
        answers: [
          { text: 'Чёрный', id: 1 },
          { text: 'Синий', id: 2 },
          { text: 'Красный', id: 3 },
          { text: 'Зелёный', id: 4 },
        ],
      },
      {
        question: 'В каком году основали Санкт-Петербург',
        rightAnswerId: 3,
        id: 2,
        answers: [
          { text: '1700', id: 1 },
          { text: '1702', id: 2 },
          { text: '1703', id: 3 },
          { text: '1803', id: 4 },
        ],
      },
    ],
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

  render(): ReactNode {
    return (
      <div className={styles.quiz}>
        <div className={styles.quizWrapper}>
          <h1>Ответьте на все вопросы</h1>

          {this.state.isFinished ? (
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
