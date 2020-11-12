import React, { Component, ReactNode } from 'react';
import axios, { AxiosResponse } from 'axios';
import { NavLink } from 'react-router-dom';
import styles from './quizList.module.css';

class QuizList extends Component {
  renderQuiz(): React.ReactFragment {
    return [1, 2, 3].map((quiz, index) => {
      return (
        <li key={index}>
          <NavLink to={'/quiz/' + quiz}>test {quiz}</NavLink>
        </li>
      );
    });
  }

  componentDidMount() {
    axios
      .get('https://react-quiz-test-2e76e.firebaseio.com/quiz.json')
      .then((response) => console.log(response));
  }

  render(): ReactNode {
    return (
      <div className={styles.quizList}>
        <div>
          <h1>Список тестов</h1>

          <ul>{this.renderQuiz()}</ul>
        </div>
      </div>
    );
  }
}

export default QuizList;
