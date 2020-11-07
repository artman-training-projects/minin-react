import React, {Component} from 'react';
import styles from './quiz.module.css';
import ActiveQuiz from '../../components/ActiveQuiz';
import {IonAnswerClick} from '../../types';

class Quiz extends Component {
  state = {
    quiz: [
      {
        question: 'Какого цвета небо?',
        rightAnswerId: 2,
        answers: [
          {text: 'Чёрный', id: 1},
          {text: 'Синий', id: 2},
          {text: 'Красный', id: 3},
          {text: 'Зелёный', id: 4},
        ]
      }
    ]
  }

  onAnswerClickHandler: IonAnswerClick = (answerId: number) => {
    console.log('Answer Id:', answerId);
  }

  render() {
    return (
      <div className={styles.quiz}>
        <div className={styles.quizWrapper}>
          <h1>Ответьте на все вопросы</h1>
          <ActiveQuiz
            answers={this.state.quiz[0].answers}
            question={this.state.quiz[0].question}
            onAnswerClick={this.onAnswerClickHandler}
          />
        </div>
      </div>
    )
  }
}

export default Quiz;
