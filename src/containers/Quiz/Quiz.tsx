import React, { Component } from 'react';
import styles from './quiz.module.css';
import ActiveQuiz from '../../components/ActiveQuiz';
import { IonAnswerClick } from '../../types';

class Quiz extends Component {
  state = {
    activeQuestion: 0,
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
    console.log('Answer Id:', answerId);

    const question = this.state.quiz[this.state.activeQuestion];

    this.setState({
      activeQuestion: this.state.activeQuestion + 1,
    });
  };

  render() {
    return (
      <div className={styles.quiz}>
        <div className={styles.quizWrapper}>
          <h1>Ответьте на все вопросы</h1>

          <ActiveQuiz
            answers={this.state.quiz[this.state.activeQuestion].answers}
            question={this.state.quiz[this.state.activeQuestion].question}
            quizLength={this.state.quiz.length}
            answerNumber={this.state.activeQuestion + 1}
            onAnswerClick={this.onAnswerClickHandler}
          />
        </div>
      </div>
    );
  }
}

export default Quiz;
